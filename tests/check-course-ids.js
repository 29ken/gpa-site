// Guards the share-link codec: links store courses by their position in courses/course-ids.json.
// If that list is reordered or shortened, every link shared before the change decodes to the wrong classes.
// Also checks that every catalog file and courses/rules.json parse and only reference real course ids.
//
//   node tests/check-course-ids.js           -> fails if a rule is broken
//   node tests/check-course-ids.js --update  -> after APPENDING new ids to course-ids.json, records them in the snapshot
//
// No dependencies; runs in CI on every push (.github/workflows/check.yml).
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const snapshotPath = path.join(__dirname, 'course-ids.snapshot.json');
const readJson = rel => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));

const pinned = readJson('courses/course-ids.json').ids;
const catalogIds = new Set();
['2324', '2425', '2526', '2627'].forEach(k => readJson(`courses/courses-${k}.json`).courses.forEach(c => {
  if (!Array.isArray(c) || c.length !== 4 || typeof c[0] !== 'string' || typeof c[2] !== 'number') throw new Error(`Bad course row in courses-${k}.json: ${JSON.stringify(c)}`);
  catalogIds.add(c[0]);
}));
const snapshot = JSON.parse(fs.readFileSync(snapshotPath, 'utf8'));

const errors = [];
const dupes = pinned.filter((id, i) => pinned.indexOf(id) !== i);
if (dupes.length) errors.push(`Duplicate ids in course-ids.json: ${[...new Set(dupes)].join(', ')}`);

snapshot.forEach((id, i) => {
  if (pinned[i] !== id) errors.push(`Position ${i} changed: was "${id}", now "${pinned[i] ?? '(missing)'}". course-ids.json is append-only.`);
});

const unpinned = [...catalogIds].filter(id => !pinned.includes(id));
if (unpinned.length) errors.push(`New catalog ids not pinned yet — append them to the END of courses/course-ids.json, then run with --update: ${unpinned.join(', ')}`);

// rules.json may only mention real course ids (a typo would silently disable a check)
const rules = readJson('courses/rules.json');
const ruleIds = [
  ...(rules.repeatable?.ids || []), ...Object.keys(rules.minGrade?.courses || {}),
  ...(rules.prerequisites || []).flatMap(r => [r.course, ...r.needs.flatMap(g => g.anyOf)]),
  ...(rules.sequences || []).flatMap(s => s.levels.flat()),
];
const unknown = [...new Set(ruleIds.filter(id => !catalogIds.has(id)))];
if (unknown.length) errors.push(`courses/rules.json mentions ids that aren't in any catalog: ${unknown.join(', ')}`);

if (errors.length) {
  console.error('Course id check FAILED:\n  - ' + errors.slice(0, 20).join('\n  - '));
  process.exit(1);
}

if (process.argv.includes('--update')) {
  fs.writeFileSync(snapshotPath, JSON.stringify(pinned, null, 0) + '\n');
  console.log(`Snapshot updated: ${snapshot.length} -> ${pinned.length} ids.`);
} else {
  console.log(`Course data check passed: ${pinned.length} pinned ids (append-only order intact), ${catalogIds.size} catalog ids, rules reference valid ids.`);
}
