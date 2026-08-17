const LOGO_DATA = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD35mbefmPX1pMt/eP50N99vrSV/IbbufrKHbm/vN+dG5v7zfnTaKV2Ow7c395vzo3N/eb86bRRdhYdub+8350bm/vN+dNoouwsO3N/eb86Nzf3m/Om0UXYWHbm/vN+dG5v7zfnTaKLsLDtzf3m/Ojc395vzptFF2Fh25v7zfnRub+83502ii7Cw7c395vzo3N/eb86bRRdhYdub+8350bm/vN+dNoouwsO3N/eb86Nzf3m/Om0UXYWHbm/vN+dG5v7zfnTaKLsLDlZt4+Y9fWikX76/Wiri3YloG++31pKVvvt9aSoe5S2CiiikAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAKv31+tFC/fX60VpDYTBvvt9aSlb77fWkqHuNbBRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFX76/Wihfvr9aK0hsJg332+tJSt99vrSVD3GtgooopAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACr99frRQv31+tFaQ2Ewb77fWkpW++31pKh7jWwUUUUgCiiuk8L+Fhr8M8s07wxxsFUqAcnGT19OPzrvy3La+Y11h8Oryd7K9tlrqc+JxMMPB1Kjskc3RXorfDW0CkjUps9vkFeezRPBcPBIMPGxVh6EHBrtzfh3HZSovFwspXtZp7ehjhMxoYttUne2+jQyiilVWeRURSzEhVAGSSegFeJGLk+VHbewlFdzpPw8lmhWbVrhodwz5UWCw+pOQD7AH61sn4eaGU2h7tT/eEgz/LFfa4TgDNsRTVTkUb7Juz+48Wrn+EhLlu36LQ8torrPEHgqXSbN721u1mt15ZZMKwHseh/Q/WuTr5vNMpxOWVvYYqNpWv5Nd0elhcXSxUOek7oKK2PDOiR67rT2ck7xARmTcoBOQQMfrWv4i8GW+iaG99HeyyMGC7WUAcmurDcPY3EYOWPpxTpxvd37b6GNTMaFOsqEn7zt0fU5CiiivESu7I72FFehw/Di1lgSQ6lMNwBxsHcU//AIVpadtTm/74FfZR4BziaUo01/4Ejxnn2DTtzfg/8jzmitjxLosehawtmkzygxiTcwAOSWGP0rHr5XG4Orgq0sPWVpRdmt9fkenQrxrQVSDunsFFFFcxsKv31+tFC/fX60VpDYTBvvt9aSlb77fWkqHuNbBRRRSAK9j8I2H9neE7WNlxI481/q3P6DA/CvKtGsTqWv2ljjIlkAbHoOT+gNe1XU0dlpstw+AkUZc/QDNfq/hpgVH2+YVNFFWT/FnynEtdvkoLff8ARDbO+gvWuBCc+RKYW+oAJ/nXlnjew+xeLZZFXCXAEo+p4P6gn8a2vh9qTzapqFtK3zzf6R+Oef5j8qvfEWw87RoNQRfmt32sf9luP54r2M+qLiDh54yK96Db9LOz/DU5MBF5fmCoyejVvvX+Z5p0FdT4Bs4rrxT5sqg+RGZFB9cgA/qa5YjNbPhfWE0XxAlzKCYnUxyY5IBIOfwIH61+V8OVqNHMqFTEfCmr32XZv5n1GYwnPCzjT3aPUfEWrPomgS3sUQkcEKqnpknGT7V5/F8QNeScO/2eRM8p5eOPYg5r0tXsdW0/5TDdW0o56MpFcxf/AA70q4ZnsppbRuy/fUfgef1r9m4mwWc4ucMRlNf3Utk93+TPjstrYOknTxcNb72/po47xH4nudelRAphtUAKxZ6nHJJ7+1YVa2t+HtQ0KYC5VXhY4SZeh9vY+1ZNfiedTx08XN5hf2nW/wCnkfaYKNCNFLD25elv63Ot+Hn/ACNkn/Xu3/oS11fj/wD5E2T/AK6J/OuU+Hn/ACNkn/Xu3/oS11nj/wD5E2T/AK6J/Ov0/h//AJJTEekj5jHf8jaHqjyaiiivxs+yNdfFHiBECrqcwAGMccD8q9H8GXt1qHhhJ7yZpZfMYbm64B4ryGvVvh+P+KPT/rq/86/TfDzMMVXzJwq1G48r0bbXTofM8QYalTw3NGKTv0Ry3xE/5G2P/r2X/wBCauSrrfiJ/wAjbH/17L/6E1clXynFv/I3xH+I9TJ/9zp+gUUUV86ekKv31+tFC/fX60VpDYTBvvt9aSlb77fWkqHuNbBRRRSA7X4c2Bl1W51Bl4hQRqT6nr+QH613mrWH9p6NNp/nND5oALqMnGQTx79PxrM8FWAsfCMBZcPPmZvx6foBWd4p8YXOi6ulnZwwyHyw7l88Ek4HBHYZ/Gv6AymOEyTIIfXdIzWvduXTTyPgMU6uNx0vYbp6fIn0bwTHo2sRX8WoyuVyChQAMCCMdfx/Ct/VrJdS0W5smx+9jKgnsccH8Dg157/wsfVgf+PS0/Jv8a9E069XUNJtrxcATRhyB2JHI/Cunh3GZNi6NTA5arRs7p366PczzCjjKU41sTv0enT0PC3RkkKOCGUkEHqDSVu+L7D+z/FtyqrhJSJl/Hr+uam8HaTYaprmL6ZNsQDLbk4Mh/qB3H9K/Ef7FqzzN5dFpS5mrt2W+/3H2v16EcKsS9rX0Ma2vtQ02bda3E1s5AYhSRuBGRkdxj1rtPC/jW/u9Vi0zUVSYynakqrtIOO4HBH5V1eqeHNJ1dVa7tRvUYEiHawHpkdR7GodK8KaPpF19pt4GMwBAkkbcRnrj0r9PynhLOcsxkXQxC9imm9XquqsfM4rNcHiqL9pT9/ptv6knim3iufCF+kgB2RFxnsVGR/KvF/avUPHOuw2mkyaXDIGuJwAwB5VO5P16fjXmFfNeJGKoVswjCk03FWdu/T7j0uG6U4UJSls3p/mdb8PP+Rsk/692/8AQlrq/H//ACJsn/XRP51ynw8/5GyT/r3b/wBCWur8f/8AImyf9dE/nXv5A/8AjFMR6SPPx3/I2h6o8nzxXWaH4IfWNIh1AaikSybvl8stjBI9R6VyRGRivQfh5rEQhl0e4kAfcZItx+8COQPpjP4n0r4Xg/C4HF5gqGPV4yTS1a16anu5xVr0sP7Sg7NPXrochrmlHRtclsN5kCAEORjIIBzj65H4V6P4CBHg6IkYBkc/rVvXPDGm67JHNdeYkqDAkiIBI64OQeK0rO1tdN01LSBRHBEuBk9upJNfqGQcJTynNauLulSafKr66vrfsfMY/No4rCQpO/NdXPNviJn/AIS1P+vZf/Qmrk+orZ8VapHqvieaeJt0SARofUDv+JJNY1fkPEmJhiMzr1KbunJ2ffpc+uyynKnhacZKzSCiiivDO4Vfvr9aKF++v1orSGwmDffb60lK332+tJUPca2CiiikBqp4m16NBGmpzKqgAAYwAOg6VQurq4vbpri6maWVsZdupwMCoaK662PxNeCp1ajcV0bbX3GMMPTg+aMUn5JBWjba/rNnapb22oTRxJkBFPA5z/Ws6iooYuth5OVCbi3pdNp2+RVWlCorTSa81cs3uo3uoyK97cNOyjCl+oHpVdWZHV0YqynIZTgg0lFROvUqTdWcm5Pq3r94404wjyxVkbtr4x8RWqBFv2kUdBKoY/mRn9aW58aeIrmMob8xKevlIFP54yPzrBor0ln+ZKHs1iJ27czOb+z8Nfm9mr+iHO7ySGSR2dycsSckn1JptFFeTKUpPmkdiVixZ313p05nsZ2hkIKll644OP0FT3et6tf25t7y+lljJBKt0yOlZ4GKWumGOxFOm6MajUXuk3Z330vYxdCnKXO4pvvbUKVHZJA6MVZTlSDgg+oNJRXNGTi7xNrXN+38a+IreIR/bRKoGAZEBP54yfxqtqPiXW9UiMV1et5R6ogCg/XHX8ayaK9SpnmY1Kfsp15OO1rvbsckcDh4y51TSfeyCiiivKOsKKKKAFX76/Wihfvr9aK0hsJg332+tJSt99vrSVD3GtgooopAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACr99frRQv31+tFaQ2Ewb77fWkpW++31pKh7jWwUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBV++v1ooX76/WitIbCYN99vrSUrffb60lQ9xrYKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAq/fX60UL99frRWkNhMG++31pKVvvt9aSoe41sFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAVfvr9aKF++v1orSGwmKytvPynr6Um1v7p/KiihxVxJi7W/ut+VG1v7rflRRU8qC4bW/ut+VG1v7rflRRRyoLhtb+635UbW/ut+VFFHKguG1v7rflRtb+635UUUcqC4bW/ut+VG1v7rflRRRyoLhtb+635UbW/ut+VFFHKguG1v7rflRtb+635UUUcqC4bW/ut+VG1v7rflRRRyoLhtb+635UbW/ut+VFFHKguG1v7rflRtb+635UUUcqC4bW/ut+VG1v7rflRRRyoLgqtvHynr6UUUVrGKJbP/2Q==";
const COURSES_2627 = [
  ["DLS 5800","Deep Learning Seminar I",1,5],["DLS 5801","Deep Learning Seminar 2",1,5],
  ["ENG 5050","AP Seminar",1,5],["CAP 5051","AP Research",1,5],
  ["ENG 1000","English 9",1,1],["ENG 2000","English 10",1,2],
  ["ENG 4004","English 11/12: From Page to Screen",1,4],["ENG 4003","English 11/12: Mythology of Monsters",1,4],
  ["ENG 5000","AP English Language & Composition",1,5],["ENG 5001","AP English Literature & Composition",1,5],
  ["ENG 5002","SUPA: Introduction to Creative Nonfiction",1,5],["ENG 5003","SUPA: Presentational Speaking",0.5,5],
  ["SOC 1100","Foundations of the Modern World",1,1],["SOC 2100","Modern World History",1,2],
  ["SOC 3101","Japan Studies",0.5,3],["SOC 3103","Contemporary World Issues: Sustainable Development",0.5,3],
  ["SOC 4100","US History",0.5,4],["SOC 4101","Race and Ethnic Studies",0.5,4],
  ["SOC 5100","AP World History",1,5],["SOC 5101","AP US History",1,5],
  ["SOC 5102","AP Macroeconomics",1,5],["SOC 5103","AP Microeconomics",1,5],
  ["SOC 5104","SUPA: Psychology",1,5],["SOC 5105","SUPA: Introduction to Entrepreneurship",1,5],
  ["SOC 6100","Japan Seminar",1,6],
  ["MTH 1201","Integrated Mathematics 1",1,1],["MTH 2200","Integrated Mathematics 2",1,2],
  ["MTH 3200","Algebra 2",1,3],["MTH 4200","Precalculus",1,4],["MTH 4201","Advanced Precalculus",1,4],
  ["MTH 4202","Calculus",1,4],["MTH 5200","AP Calculus AB",1,5],["MTH 5201","AP Calculus BC",1,5],
  ["MTH 5203","AP Calculus BC (Post AB)",1,5],["MTH 5202","AP Statistics",1,5],
  ["MTH 6202","Advanced Math Topics: Complex Analysis and Differential Equations",1,6],
  ["SCI 1300","Biology",1,1],["SCI 2301","Chemistry",1,2],["SCI 3303","Dynamics of Physics & Chemistry",1,3],
  ["SCI 3302","Physics",1,3],["SCI 4300","Biomedical Science",1,4],["SCI 4301","Organic Chemistry",1,4],
  ["SCI 4303","Food Science & Sustainability",1,4],["SCI 4304","Public Health and Public Policy",1,4],
  ["SCI 5300","AP Environmental Science",1,5],["SCI 5301","AP Biology",1,5],["SCI 5302","AP Chemistry",1,5],
  ["SCI 5304","AP Physics 2",1,5],["SCI 6300","Synthetic Biology",1,6],
  ["DI 1900","Design Products",0.5,1],["DI 1901","Design with Code",0.5,1],
  ["DI 1902","Design with Physical Computing & Robotics",0.5,1],["DI 1903","Technology & Society",0.5,1],
  ["DI 1904","Data Science I: Literacy, Analysis, and Visualization",0.5,1],
  ["DI 1905","Cybersecurity I: Networks & Security",0.5,1],["DI 2900","Design Studio",0.5,2],
  ["DI 4906","Data Science 2: AI & ML Models",0.5,4],["DI 4907","Cybersecurity 2: Ethical Hacking",0.5,4],
  ["DI 5900","AP Computer Science Principles",1,5],["DI 5901","AP Computer Science A",1,5],
  ["DI 6902","Advanced Topics in Design, Engineering, and Computer Science",0.5,6],
  ["MDL 1510","Novice Mid Chinese",1,1],["MDL 2510","Novice High Chinese",1,2],
  ["MDL 3510","Intermediate Chinese",1,3],["MDL 4510","Intermediate Mid Chinese",1,4],
  ["MDL 5510","AP Chinese Language & Culture",1,5],["MDL 6500","Advanced Chinese: Politics & Economics",1,6],
  ["MDL 1511","Novice Mid-High Spanish",1,1],["MDL 2511","Intermediate Spanish",1,2],
  ["MDL 3511","Intermediate Mid Spanish",1,3],["MDL 4511","Intermediate High Spanish",1,4],
  ["MDL 5511","AP Spanish Language & Culture",1,5],["MDL 6511","Advanced Spanish",1,6],
  ["MDL 1502","Novice Japanese",1,1],["MDL 2502","Novice Mid Japanese",1,2],
  ["MDL 3502","Novice High Japanese",1,3],["MDL 4502","Intermediate Japanese",1,4],
  ["MDL 5502","AP Japanese Language & Culture",1,5],["MDL 6502","Intermediate High Japanese",1,6],
  ["MDL 6503","Advanced Japanese",1,6],["MDL 6504","Advanced High Japanese",1,6],
  ["MDL 6505","Superior Japanese: General Topics",1,6],["MDL 6506","Superior Japanese: Field Specific Studies & Research",1,6],
  ["MDL 6507","Superior Japanese: Literature",1,6],["MDL 6508","Superior Japanese: Business, Economics, and Society",1,6],
  ["VPA 1600","Introduction to Band",1,1],["VPA 2600","Concert Band 1",1,2],["VPA 3600","Concert Band 2",1,3],
  ["VPA 4600","Wind Ensemble",1,4],["VPA 5600","Wind Ensemble Extended Studies",1,5],
  ["VPA 4605","Jazz Band",1,4],["VPA 5605","Jazz Band Extended Studies",1,5],
  ["VPA 1601","Concert Choir 1",1,1],["VPA 2601","Concert Choir 2",1,2],["VPA 3601","Chamber Singers",1,3],
  ["VPA 4601","Vocal Jazz Ensemble",1,4],["VPA 5601","Vocal Jazz Ensemble Extended Studies",1,5],
  ["VPA 2604","Concert Orchestra 1",1,2],["VPA 3604","Concert Orchestra 2",1,3],
  ["VPA 4604","Chamber Orchestra",1,4],["VPA 5604","Chamber Orchestra Extended Studies",1,5],
  ["VPA 1602","Modern Band 1",0.5,1],["VPA 2602","Modern Band 2",0.5,2],
  ["VPA 1603","Composition & Songwriting 1",0.5,1],["VPA 2603","Composition & Songwriting 2",0.5,2],
  ["VPA 1650","Acting 1",0.5,1],["VPA 2650","Acting 2",0.5,2],["VPA 3650","Advanced Acting",0.5,3],
  ["VPA 3651","Acting for the Camera",0.5,3],["VPA 1651","Stagecraft",0.5,1],
  ["VPA 1700","Art Foundations",1,1],["VPA 1704","Idea to Object: Digital Fabrication",0.5,1],
  ["VPA 1705","Digital Filmmaking 1",0.5,1],["VPA 2700","Digital Filmmaking 2",0.5,2],
  ["VPA 3700","Ceramics",0.5,3],["VPA 3703","Photography",0.5,3],["VPA 3701","Printmaking",0.5,3],
  ["VPA 4700","Advanced Studio Art",1,4],["VPA 5700","AP Studio Art: Drawing",1,5],
  ["VPA 5701","AP Studio Art: 2D",1,5],["VPA 5702","AP Studio Art: 3D",1,5],
  ["PE 1802","Wellness 9",1,1],["PE 2802","Wellness 10",1,2],["PE 3805","Lifetime Activities",0.5,3],
  ["PE 3801","Strength Training & Conditioning",0.5,3],["PE 4801","Strength Training & Conditioning 2",0.5,4],
  ["PE 3803","Lifeguard Training",0.5,3],["PE 3804","Personal Fitness",0.5,3],
  ["IND 1004","Skills for Success",0.5,1],["IND 1003","Teaching Intern",0.5,1],
  ["IND 4000","Independent Inquiry",0.5,4],["IND 4001","Global Online Academy (GOA)",0.5,4],
];

/* ===== 2025–26 HS Learning Framework course list (for students who took
   classes under the older framework — names/credits/offerings differ). ===== */
const COURSES_2526 = [
  ["DLS 5800","Deep Learning Seminar I",1,5],["DLS 5801","Deep Learning Seminar II",1,5],
  ["ENG 5050","AP Seminar",1,5],["CAP 5051","AP Research",1,5],
  ["ENG 1000","English 9",1,1],["ENG 2000","English 10",1,2],
  ["ENG 4004","English 11/12: Crime & Punishment",1,4],["ENG 4003","English 11/12: Psychology of Fear",1,4],
  ["ENG 5000","AP English Language & Composition",1,5],["ENG 5001","AP English Literature & Composition",1,5],
  ["ENG 5002","SUPA: Introduction to Creative Nonfiction",1,5],["ENG 5003","SUPA: Presentational Speaking",0.5,5],
  ["SOC 1100","Foundations of the Modern World",1,1],["SOC 2100","Modern World History",1,2],
  ["SOC 3101","Japan Studies",0.5,3],["SOC 3103","Contemporary World Issues: Sustainable Development",0.5,3],
  ["SOC 4100","US History",0.5,4],["SOC 4101","Race and Ethnic Studies",0.5,4],
  ["SOC 5100","AP World History",1,5],["SOC 5101","AP US History",1,5],
  ["SOC 5102","AP Economics",1,5],["SOC 5103","AP Microeconomics",1,5],
  ["SOC 5104","SUPA: Psychology",1,5],["SOC 5105","SUPA: Introduction to Entrepreneurship",1,5],
  ["SOC 6100","Japan Seminar",1,6],
  ["MTH 1201","Integrated Mathematics I",1,1],["MTH 2200","Geometry",1,2],
  ["MTH 3200","Algebra 2",1,3],["MTH 4200","Precalculus",1,4],["MTH 4201","Advanced Precalculus",1,4],
  ["MTH 4202","Calculus",1,4],["MTH 5200","AP Calculus AB",1,5],["MTH 5201","AP Calculus BC",1,5],
  ["MTH 5203","AP Calculus BC (Post AB)",1,5],["MTH 5202","AP Statistics",1,5],
  ["MTH 6202","Advanced Math Topics: Linear Algebra & Multivariable Calculus",1,6],
  ["SCI 1300","Biology",1,1],["SCI 2301","Chemistry",1,2],["SCI 2302","Dynamics of Chemistry & Physics",1,2],
  ["SCI 3302","Physics",1,3],["SCI 4300","Biomedical Science",1,4],["SCI 4301","Organic Chemistry",1,4],
  ["SCI 4303","Food Science & Sustainability",1,4],
  ["SCI 5300","AP Environmental Science",1,5],["SCI 5301","AP Biology",1,5],["SCI 5302","AP Chemistry",1,5],
  ["SCI 5304","AP Physics 2",1,5],["SCI 6300","Synthetic Biology",1,6],
  ["DI 1900","Design Products",0.5,1],["DI 1901","Design with Code",0.5,1],
  ["DI 1902","Design with Physical Computing & Robotics",0.5,1],["DI 1903","Global Citizenship in the Digital Age",0.5,1],
  ["DI 2900","Design Studio",0.5,2],["DI 5900","AP Computer Science Principles",1,5],
  ["DI 5901","AP Computer Science A",1,5],["DI 5903","Data Science",1,5],
  ["DI 6902","Advanced Topics in Computer Science",0.5,6],
  ["MDL 1510","Novice Mid Chinese",1,1],["MDL 2510","Novice High Chinese",1,2],
  ["MDL 3510","Intermediate Chinese",1,3],["MDL 4510","Intermediate Mid Chinese",1,4],
  ["MDL 5510","AP Chinese Language & Culture",1,5],["MDL 6501","Advanced Chinese: Culture & Media",1,6],
  ["MDL 1511","Novice Mid-High Spanish",1,1],["MDL 2511","Intermediate Spanish",1,2],
  ["MDL 3511","Intermediate Mid Spanish",1,3],["MDL 4511","Intermediate High Spanish",1,4],
  ["MDL 5511","AP Spanish Language & Culture",1,5],["MDL 6511","Advanced Spanish",1,6],
  ["MDL 1502","Novice Japanese",1,1],["MDL 2502","Novice Mid Japanese",1,2],
  ["MDL 3502","Novice High Japanese",1,3],["MDL 4502","Intermediate Japanese",1,4],
  ["MDL 5502","AP Japanese Language & Culture",1,5],["MDL 6502","Intermediate High Japanese",1,6],
  ["MDL 6503","Advanced Japanese",1,6],["MDL 6504","Advanced High Japanese",1,6],
  ["MDL 6505","Superior Japanese: General Topics",1,6],["MDL 6506","Superior Japanese: Field Specific Studies & Research",1,6],
  ["MDL 6507","Superior Japanese: Literature",1,6],["MDL 6508","Superior Japanese: Innovation & Entrepreneurship",1,6],
  ["VPA 1600","Introduction to Band",1,1],["VPA 2600","Concert Band 1",1,2],["VPA 3600","Concert Band 2",1,3],
  ["VPA 4600","Wind Ensemble",1,4],["VPA 5600","Wind Ensemble Extended Studies",1,5],
  ["VPA 4605","Jazz Band",1,4],["VPA 5605","Jazz Band Extended Studies",1,5],
  ["VPA 1601","Concert Choir 1",1,1],["VPA 2601","Concert Choir 2",1,2],["VPA 3601","Chamber Singers",1,3],
  ["VPA 4601","Vocal Jazz Ensemble",1,4],["VPA 5601","Vocal Jazz Ensemble Extended Studies",1,5],
  ["VPA 2604","Concert Orchestra 1",1,2],["VPA 3604","Concert Orchestra 2",1,3],
  ["VPA 4604","Chamber Orchestra",1,4],["VPA 5604","Chamber Orchestra Extended Studies",1,5],
  ["VPA 1602","Modern Band 1",0.5,1],["VPA 2602","Modern Band 2",0.5,2],
  ["VPA 1603","Composition & Songwriting 1",0.5,1],["VPA 2603","Composition & Songwriting 2",0.5,2],
  ["VPA 1650","Acting 1",0.5,1],["VPA 2650","Acting 2",0.5,2],["VPA 3650","Advanced Acting",0.5,3],
  ["VPA 3651","Acting for the Camera",0.5,3],["VPA 1651","Stagecraft",0.5,1],
  ["VPA 1700","Art Foundations",1,1],["VPA 1704","Idea to Object: Digital Fabrication",0.5,1],
  ["VPA 1705","Digital Filmmaking 1",0.5,1],["VPA 2700","Digital Filmmaking 2",0.5,2],
  ["VPA 3700","Ceramics",0.5,3],["VPA 3702","Communication Arts",0.5,3],["VPA 3703","Photography",0.5,3],
  ["VPA 3701","Printmaking",0.5,3],["VPA 4700","Advanced Studio Art",1,4],
  ["VPA 5700","AP Studio Art: Drawing",1,5],["VPA 5701","AP Studio Art: 2D",1,5],["VPA 5702","AP Studio Art: 3D",1,5],
  ["PE 1802","Wellness 9",0.5,1],["PE 2802","Wellness 10",1,2],["PE 3805","Lifetime Activities",0.5,3],
  ["PE 3801","Strength Training & Conditioning",0.5,3],["PE 4801","Strength Training & Conditioning 2",0.5,4],
  ["PE 3803","Lifeguard Training",0.5,3],["PE 3804","Personal Fitness",0.5,3],
  ["IND 1004","Skills for Success",0.5,1],["IND 1003","Teaching Intern",0.5,1],
  ["IND 4000","Independent Inquiry",0.5,4],["IND 4001","Global Online Academy (GOA)",0.5,4],
];

/* ===== 2024–25 HS Learning Framework course list ===== */
const COURSES_2425 = [
  ["DLS 5800","Deep Learning Seminar I",1,5],["DLS 5801","Deep Learning Seminar II",1,5],
  ["ENG 5050","AP Seminar",1,5],["CAP 5051","AP Research",1,5],
  ["ENG 1000","English 9",1,1],["ENG 2000","English 10",1,2],
  ["ENG 4004","English 11/12: Advanced Topics: Crime and Punishment",1,4],["ENG 4003","English 11/12: Advanced Topics: Psychology of Fear",1,4],
  ["ENG 5000","AP English Language and Composition",1,5],["ENG 5001","AP English Literature and Composition",1,5],
  ["ENG 5002","SUPA: Introduction to Creative Nonfiction",1,5],["ENG 5003","SUPA: Presentational Speaking",0.5,5],
  ["SOC 1100","Foundations of the Modern World",1,1],["SOC 2100","Modern World History",1,2],
  ["SOC 3101","Japan Studies",0.5,3],["SOC 3103","Contemporary World Issues: Economics for Sustainable Development",0.5,3],
  ["SOC 4100","US History",0.5,4],["SOC 4101","Race and Ethnic Studies",0.5,4],
  ["SOC 5100","AP World History",1,5],["SOC 5101","AP US History",1,5],
  ["SOC 5102","AP Economics",1,5],["SOC 5104","SUPA: Psychology",1,5],
  ["SOC 5105","SUPA: Introduction to Entrepreneurship",1,5],["SOC 6100","Japan Seminar",1,6],
  ["MTH 1200","Algebra 1",1,1],["MTH 2200","Geometry",1,2],["MTH 3200","Algebra 2",1,3],
  ["MTH 4200","Precalculus",1,4],["MTH 4201","Advanced Precalculus",1,4],["MTH 4202","Calculus",1,4],
  ["MTH 5200","AP Calculus AB",1,5],["MTH 5201","AP Calculus BC",1,5],["MTH 5203","AP Calculus BC (Post AB)",1,5],
  ["MTH 5202","AP Statistics",1,5],["MTH 6201","Advanced Math Topics: Differential Equations & Complex Variables",1,6],
  ["SCI 1300","Biology",1,1],["SCI 2301","Chemistry",1,2],["SCI 3302","Physics",1,3],
  ["SCI 4300","Biomedical Science",1,4],["SCI 4301","Organic Chemistry",1,4],["SCI 4303","Food Science and Sustainability",1,4],
  ["SCI 5300","AP Environmental Science",1,5],["SCI 5301","AP Biology",1,5],["SCI 5302","AP Chemistry",1,5],
  ["SCI 5304","AP Physics 2",1,5],["SCI 6300","Synthetic Biology",1,6],
  ["DI 1900","Design Products",0.5,1],["DI 1901","Design with Code",0.5,1],
  ["DI 1902","Design with Physical Computing & Robotics",0.5,1],["DI 1903","Global Citizenship in the Digital Age",0.5,1],
  ["DI 5900","AP Computer Science Principles",1,5],["DI 5901","AP Computer Science A",1,5],
  ["DI 5903","SUPA: Data Science",1,5],["DI 6902","Advanced Topics in Computer Science",0.5,6],
  ["MDL 1510","Novice Mid Chinese",1,1],["MDL 2510","Novice High Chinese",1,2],
  ["MDL 3510","Intermediate Chinese",1,3],["MDL 4510","Intermediate Mid Chinese",1,4],
  ["MDL 5510","AP Chinese Language and Culture",1,5],["MDL 6500","Advanced Chinese: Politics & Economics",1,6],
  ["MDL 1511","Novice Mid-High Spanish",1,1],["MDL 2511","Intermediate Spanish",1,2],
  ["MDL 3511","Intermediate Mid Spanish",1,3],["MDL 4511","Intermediate High Spanish",1,4],
  ["MDL 5511","AP Spanish Language and Culture",1,5],
  ["MDL 1502","Novice Japanese",1,1],["MDL 2502","Novice Mid Japanese",1,2],
  ["MDL 3502","Novice High Japanese",1,3],["MDL 4502","Intermediate Japanese",1,4],
  ["MDL 5502","AP Japanese Language and Culture",1,5],["MDL 6502","Intermediate High Japanese",1,6],
  ["MDL 6503","Advanced Japanese",1,6],["MDL 6504","Advanced High Japanese",1,6],
  ["MDL 6505","Superior Japanese: General Topics",1,6],["MDL 6506","Superior Japanese: Field Specific Studies and Research",1,6],
  ["MDL 6507","Superior Japanese: Literature",1,6],["MDL 6508","Superior Japanese: Innovation and Entrepreneurship",1,6],
  ["MDL 6509","Applied Japanese Through Impact Capstone",1,6],
  ["VPA 1600","Introduction to Band",1,1],["VPA 2600","Concert Band 1",1,2],["VPA 3600","Concert Band 2",1,3],
  ["VPA 4600","Wind Ensemble",1,4],["VPA 5600","Wind Ensemble Extended Studies",1,5],
  ["VPA 4605","Jazz Band",1,4],["VPA 5605","Jazz Band Extended Studies",1,5],
  ["VPA 1601","Concert Choir 1",1,1],["VPA 2601","Concert Choir 2",1,2],["VPA 3601","Chamber Singers",1,3],
  ["VPA 4601","Vocal Jazz Ensemble",1,4],["VPA 5601","Vocal Jazz Ensemble Extended Studies",1,5],
  ["VPA 2604","Concert Orchestra 1",1,2],["VPA 3604","Concert Orchestra 2",1,3],
  ["VPA 4604","Chamber Orchestra",1,4],["VPA 5604","Chamber Orchestra Extended Studies",1,5],
  ["VPA 1602","Modern Band 1",0.5,1],["VPA 2602","Modern Band 2",0.5,2],
  ["VPA 1603","Composition and Songwriting 1",0.5,1],["VPA 2603","Composition and Songwriting 2",0.5,2],
  ["VPA 1650","Acting 1",0.5,1],["VPA 2650","Acting 2",0.5,2],["VPA 3650","Advanced Acting",0.5,3],
  ["VPA 1651","Stagecraft",0.5,1],
  ["VPA 1700","Art Foundations",1,1],["VPA 1704","Idea to Object: Digital Fabrication",0.5,1],
  ["VPA 1705","Digital Filmmaking 1",0.5,1],["VPA 2700","Digital Filmmaking 2",0.5,2],
  ["VPA 3700","Ceramics",0.5,3],["VPA 3702","Communication Arts",0.5,3],["VPA 3703","Photography",0.5,3],
  ["VPA 4700","Advanced Studio Art",1,4],
  ["VPA 5700","AP Studio Art: Drawing",1,5],["VPA 5701","AP Studio Art: 2D",1,5],["VPA 5702","AP Studio Art: 3D",1,5],
  ["PE 1802","Wellness 9",0.5,1],["PE 2802","Wellness 10",1,2],["PE 3805","Lifetime Activities",0.5,3],
  ["PE 3801","Strength Training and Conditioning",0.5,3],["PE 4801","Strength Training and Conditioning 2",0.5,4],
  ["PE 3803","Lifeguard Training",0.5,3],["PE 3804","Personal Fitness",0.5,3],
  ["IND 1004","Skills for Success",0.5,1],["IND 1003","Teaching Intern",0.5,1],
  ["IND 4000","Independent Inquiry",0.5,4],["IND 4001","Global Online Academy (GOA)",0.5,4],
  ["IND 6001","IMPACT Capstone: Element in Action",1,6],
];

/* ===== 2023–24 HS Learning Framework course list ===== */
const COURSES_2324 = [
  ["ENG 5050","AP Seminar",1,5],["CAP 5051","AP Research",1,5],
  ["ENG 1000","English 9",1,1],["ENG 1001","Humanities: English / History",1,1],
  ["ENG 2000","English 10",1,2],
  ["ENG 4001","English 11/12: Advanced Topics: Crime and Punishment",1,4],
  ["ENG 4002","English 11/12: Advanced Topics: Heroes and Villains",1,4],
  ["ENG 4003","English 11/12: Advanced Topics: Psychology of Fear",1,4],
  ["ENG 5000","AP English Language and Composition",1,5],["ENG 5001","AP English Literature and Composition",1,5],
  ["ENG 5002","SUPA: Introduction to Creative Nonfiction",1,5],["ENG 5003","SUPA: Presentational Speaking",0.5,5],
  ["SOC 1100","Foundations of the Modern World",1,1],["SOC 1101","Humanities: English / History",1,1],
  ["SOC 2100","Modern World History",1,2],["SOC 3100","Psychology",0.5,3],
  ["SOC 3101","Japan Studies",0.5,3],["SOC 3103","Contemporary World Issues: Economics for Sustainable Development",0.5,3],
  ["SOC 4100","US History",1,4],["SOC 3102","Race and Ethnic Studies",0.5,3],
  ["SOC 5100","AP World History",1,5],["SOC 5101","AP US History",1,5],
  ["SOC 5102","AP Economics",1,5],["SOC 5105","SUPA: Introduction to Entrepreneurship",1,5],
  ["SOC 6100","Japan Seminar",1,6],
  ["MTH 1200","Algebra 1",1,1],["MTH 2200","Geometry",1,2],["MTH 3200","Algebra 2 with Trigonometry",1,3],
  ["MTH 4200","Precalculus",1,4],["MTH 4201","Advanced Precalculus",1,4],["MTH 4202","Calculus",1,4],
  ["MTH 5200","AP Calculus AB",1,5],["MTH 5201","AP Calculus BC",1,5],["MTH 5203","AP Calculus BC (Post AB)",1,5],
  ["MTH 5202","AP Statistics",1,5],["MTH 6201","Advanced Math Topics: Linear Algebra, Multivariable Calculus",1,6],
  ["SCI 1300","Biology",1,1],["SCI 2301","Chemistry",1,2],["SCI 3302","Physics",1,3],
  ["SCI 4300","Biomedical Science",1,4],["SCI 4301","Organic Chemistry",1,4],
  ["SCI 4302","Exercise & Health Science",1,4],["SCI 4303","Food Science and Sustainability",1,4],
  ["SCI 5300","AP Environmental Science",1,5],["SCI 5301","AP Biology",1,5],["SCI 5302","AP Chemistry",1,5],
  ["SCI 5304","AP Physics 2",1,5],["SCI 6300","Synthetic Biology",1,6],
  ["DI 1900","Design Products",0.5,1],["DI 1901","Design with Code",0.5,1],
  ["DI 1902","Design with Physical Computing & Robotics",0.5,1],["DI 1903","Global Citizenship in the Digital Age",0.5,1],
  ["DI 2900","Design Studio",0.5,2],["DI 5902","AP Computer Science Principles",1,5],
  ["DI 5901","AP Computer Science A",1,5],["DI 5903","SUPA: Data Science",1,5],
  ["MDL 1510","Novice Mid Chinese",1,1],["MDL 2510","Novice High Chinese",1,2],
  ["MDL 3510","Intermediate Chinese",1,3],["MDL 4510","Intermediate Mid Chinese",1,4],
  ["MDL 5510","AP Chinese Language and Culture",1,5],["MDL 6501","Advanced Chinese: Culture and Media",1,6],
  ["MDL 1511","Novice Mid-High Spanish",1,1],["MDL 2511","Intermediate Spanish",1,2],
  ["MDL 3511","Intermediate Mid Spanish",1,3],["MDL 4511","Intermediate High Spanish",1,4],
  ["MDL 5511","AP Spanish Language and Culture",1,5],["MDL 6511","Advanced Spanish",1,6],
  ["MDL 1502","Novice Japanese",1,1],["MDL 2502","Novice Mid Japanese",1,2],
  ["MDL 3502","Novice High Japanese",1,3],["MDL 4502","Intermediate Japanese",1,4],
  ["MDL 5502","AP Japanese Language and Culture",1,5],["MDL 6502","Intermediate High Japanese",1,6],
  ["MDL 6503","Advanced Japanese",1,6],["MDL 6504","Advanced High Japanese",1,6],
  ["MDL 6505","Superior Japanese: General Topics",1,6],["MDL 6506","Superior Japanese: Field Specific Studies and Research",1,6],
  ["MDL 6507","Superior Japanese: Literature",1,6],["MDL 6508","Superior Japanese: Innovation and Entrepreneurship",1,6],
  ["MDL 6509","Applied Japanese Through Impact Capstone",1,6],
  ["VPA 1600","Introduction to Band",1,1],["VPA 2600","Concert Band 1",1,2],["VPA 3600","Concert Band 2",1,3],
  ["VPA 4600","Wind Ensemble",1,4],["VPA 5600","Wind Ensemble Extended Studies",1,5],
  ["VPA 4605","Jazz Band",1,4],["VPA 5605","Jazz Band Extended Studies",1,5],
  ["VPA 1601","Concert Choir 1",1,1],["VPA 2601","Concert Choir 2",1,2],["VPA 3601","Chamber Singers",1,3],
  ["VPA 4601","Vocal Jazz Ensemble",1,4],["VPA 5601","Vocal Jazz Ensemble Extended Studies",1,5],
  ["VPA 2604","Concert Orchestra 1",1,2],["VPA 3604","Concert Orchestra 2",1,3],
  ["VPA 4604","Chamber Orchestra",1,4],["VPA 5604","Chamber Orchestra Extended Studies",1,5],
  ["VPA 1602","Guitar 1",0.5,1],["VPA 2602","Guitar 2",0.5,2],
  ["VPA 1603","Composition and Songwriting 1",0.5,1],["VPA 2603","Composition and Songwriting 2",0.5,2],
  ["VPA 2605","Global Music",0.5,2],
  ["VPA 1650","Acting 1",0.5,1],["VPA 2650","Acting 2",0.5,2],["VPA 1651","Stagecraft",0.5,1],
  ["VPA 1700","Art Foundations",1,1],["VPA 1704","Idea to Object: Digital Fabrication",0.5,1],
  ["VPA 1705","Digital Filmmaking 1",0.5,1],["VPA 2700","Digital Filmmaking 2",0.5,2],
  ["VPA 3700","Ceramics",0.5,3],["VPA 3702","Communication Arts",0.5,3],
  ["VPA 3701","Printmaking",0.5,3],["VPA 3703","Photography",0.5,3],
  ["VPA 4700","Advanced Studio Art",1,4],
  ["VPA 5700","AP Studio Art: Drawing",1,5],["VPA 5701","AP Studio Art: 2D",1,5],["VPA 5702","AP Studio Art: 3D",1,5],
  ["PE 1802","Wellness 9",0.5,1],["PE 2802","Wellness 10",1,2],["PE 3805","Wellness 11/12",0.5,3],
  ["PE 3801","Strength Training and Conditioning",0.5,3],["PE 3803","Lifeguard Training",0.5,3],
  ["PE 3804","Personal Fitness",0.5,3],
  ["IND 1002","Skills for Literacy",0.5,1],["IND 1004","Skills for Success",0.5,1],["IND 1005","Skills for Communication",0.5,1],
  ["IND 1003","Teaching Intern",0.5,1],["IND 4000","Independent Inquiry",0.5,4],
  ["IND 4001","Global Online Academy (GOA)",0.5,4],
  ["IND 6000","IMPACT Seminar",1,6],["IND 6001","IMPACT Capstone: Element in Action",1,6],
];

/* ===== Multi-framework selection =====
   Each year of a student's plan maps to the framework in effect that year,
   based on their graduation year. Years we don't have data for are clamped
   to the nearest available framework (future/planning → newest = 2026–27). */
const FRAMEWORKS = { "2026-27": COURSES_2627, "2025-26": COURSES_2526, "2024-25": COURSES_2425, "2023-24": COURSES_2324 };
const NEWEST_FW = "2026-27";
const FRAMEWORK_KEYS = Object.keys(FRAMEWORKS);
const fwFall = k => parseInt(k.slice(0,4), 10);

function frameworkForYear(yearName) {
  const gradStr = (document.getElementById('gradYear').value || '').trim();
  const grad = parseInt(gradStr, 10);
  if (!grad || gradStr.length < 4) return NEWEST_FW;     // no/partial grad year → newest
  const gi = YEARS.indexOf(yearName);                    // 0 Freshman … 3 Senior
  const fall = grad - 4 + gi;                             // fall start year of that grade
  const falls = FRAMEWORK_KEYS.map(fwFall).sort((a,b)=>a-b);
  const clamped = Math.min(Math.max(fall, falls[0]), falls[falls.length-1]);
  return FRAMEWORK_KEYS.find(k => fwFall(k) === clamped) || NEWEST_FW;
}
function getCourseList() { return FRAMEWORKS[frameworkForYear(currentYear)] || COURSES_2627; }
function updateFwLabel() {
  const el = document.getElementById('fwLabel'); if (!el) return;
  if (!(document.getElementById('gradYear').value || '').trim()) {
    el.innerHTML = `Select your <b>Class of …</b> (top right) to load the correct course list.`;
    return;
  }
  el.innerHTML = `Showing <b>${currentYear}</b> courses from the <b>${frameworkForYear(currentYear)}</b> framework.`;
}
const PASS_FAIL = new Set(["Design Products","Design with Code","Design with Physical Computing & Robotics","Art Foundations","Idea to Object: Digital Fabrication","Digital Filmmaking 1","Acting 1","Stagecraft","Lifeguard Training"]);
const GRADUATION_CREDITS = 24;
const GRADE_POINTS = {"A+":4.0,"A":4.0,"A-":3.67,"B+":3.33,"B":3.0,"B-":2.67,"C+":2.33,"C":2.0,"C-":1.67,"D+":1.33,"D":1.0,"D-":0.67,"F":0.0};
const GRADE_ORDER = ["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"];
const PLANNED = "Planned";
const YEARS = ["Freshman","Sophomore","Junior","Senior"];

/* ---- Strand-based proficiency grading (ASIJ Proficiency Scale) ---- */
const STRAND_POINTS = { E:4, PH:3.5, P:3, AH:2.5, A:2, B:1, I:0 };
const STRAND_OPTIONS = [
  ["E","E · Exemplary"],["PH","PH · Proficient High"],["P","P · Proficient"],
  ["AH","AH · Approaching High"],["A","A · Approaching"],["B","B · Beginning"],["I","I · Insufficient"]
];
// [totalThreshold, letter] ascending — grade is first threshold >= total (totals round up)
const STRAND_THRESHOLDS = {
  3:[[2,'F'],[4,'D'],[6,'C'],[7,'C+'],[8,'B-'],[9,'B'],[9.5,'B+'],[10.5,'A-'],[11.5,'A']],
  4:[[3,'F'],[5,'D'],[8,'C'],[9.5,'C+'],[11,'B-'],[12,'B'],[13,'B+'],[14,'A-'],[15.5,'A']],
  5:[[4,'F'],[6.5,'D'],[10,'C'],[11.5,'C+'],[13,'B-'],[15,'B'],[16,'B+'],[18,'A-'],[19.5,'A']],
};
function strandLevelsOf(e){ return (e.strandLevels||[]).slice(0, e.strandCount||0); }
function strandComplete(e){
  if(!e.strandCount) return false;
  const lv = strandLevelsOf(e);
  return lv.length===e.strandCount && lv.every(l=>l);
}
function strandTotal(e){ return strandLevelsOf(e).reduce((s,l)=> s + (STRAND_POINTS[l]||0), 0); }
function strandGradeOf(e){
  if(!strandComplete(e)) return PLANNED;
  const lv = strandLevelsOf(e);
  if(lv.every(l=>l==='E')) return 'A+';                 // A+ only if exemplary in all strands
  const total = strandTotal(e);
  for(const [val,letter] of STRAND_THRESHOLDS[e.strandCount]){ if(total<=val) return letter; }
  return 'A';
}
// When strands are active, the class grade is derived from them
function syncStrandGrade(e){ if(e.strandCount && strandComplete(e)){ e.grade = strandGradeOf(e); } }

/* Graduation-required courses auto-loaded per year (by course ID) */
const REQUIRED = {
  "Freshman":  [],
  "Sophomore": [],
  "Junior":    [],
  "Senior":    [],
};
const COURSE_BY_ID = Object.fromEntries(COURSES_2627.map(c => [c[0], c]));
// merged catalog (all framework years) — used to rebuild class names from a shared link's IDs
const ALL_COURSE_BY_ID = Object.assign({},
  Object.fromEntries(COURSES_2324.map(c => [c[0], c])),
  Object.fromEntries(COURSES_2425.map(c => [c[0], c])),
  Object.fromEntries(COURSES_2526.map(c => [c[0], c])),
  Object.fromEntries(COURSES_2627.map(c => [c[0], c]))
);
// stable index for every course id → lets share links store a tiny number instead of the id string.
// (Order is fixed for this build; keep the course arrays above append-only to preserve old links.)
const ID_LIST = Object.keys(ALL_COURSE_BY_ID);
const ID_INDEX = Object.fromEntries(ID_LIST.map((id, i) => [id, i]));

/* ============================================================
   GRADUATION REQUIREMENT CLASSIFICATION
   ============================================================ */
// Department by ID prefix
function deptOf(id) {
  const p = id.split(" ")[0];
  return ({ENG:"English",SOC:"Social Studies",MTH:"Math",SCI:"Science",
    DI:"Design & Innovation",MDL:"World Languages",VPA:"Arts",
    PE:"Wellness",DLS:"Deep Learning",CAP:"Deep Learning",IND:"Elective"})[p] || "Elective";
}
// AP Seminar (ENG 5050) counts as an English credit per the framework
const ENGLISH_EXTRA = new Set(["ENG 5050"]);

// Department badge color + icon (used on class rows)
const DEPT_META = {
  "English":            {c:"#b39ddb", i:"menu_book"},
  "Social Studies":     {c:"#ffb74d", i:"public"},
  "Math":               {c:"#90caf9", i:"functions"},
  "Science":            {c:"#81c784", i:"science"},
  "Design & Innovation":{c:"#ef9a9a", i:"developer_board"},
  "World Languages":    {c:"#ffd54f", i:"translate"},
  "Arts":               {c:"#f48fb1", i:"palette"},
  "Wellness":           {c:"#90a4ae", i:"exercise"},
  "Deep Learning":      {c:"#a1887f", i:"hub"},
  "Elective":           {c:"#80cbc4", i:"star"},
};

// Science: physical vs life
const PHYSICAL_SCI = new Set(["SCI 2301","SCI 2302","SCI 3303","SCI 3302","SCI 4301","SCI 4303","SCI 5300","SCI 5302","SCI 5304"]);
const LIFE_SCI     = new Set(["SCI 1300","SCI 4300","SCI 4304","SCI 5301","SCI 6300"]);

// Design & Innovation buckets
const DIGITAL_LITERACY = new Set(["DI 1903","DI 1904","DI 1905","DI 5900"]); // Tech&Society, Data Sci I, Cybersec I, AP CSP
const DESIGN_REQ       = new Set(["DI 1900","DI 1901","DI 1902","DI 5900"]); // Design Products/Code/Robotics, AP CSP

// Study-of requirements
const STUDY_US    = new Set(["SOC 4100","SOC 5101","SOC 4101"]); // US History, AP US History, Race & Ethnic Studies
const STUDY_JAPAN = new Set(["SOC 3101","SOC 6100","MDL 1502","MDL 2502","MDL 3502","MDL 4502","MDL 5502","MDL 6502","MDL 6503","MDL 6504","MDL 6505","MDL 6506","MDL 6507","MDL 6508"]); // Japan Studies, Japan Seminar, any Japanese

// World language family (for "same language, 2 credits")
function langFamily(id) {
  if (!id.startsWith("MDL")) return null;
  const c = COURSE_BY_ID[id];
  if (!c) return null;
  const name = c[1];
  if (/Chinese/i.test(name)) return "Chinese";
  if (/Spanish/i.test(name)) return "Spanish";
  if (/Japanese/i.test(name)) return "Japanese";
  return "Other";
}

let uidCounter = 0;
const nextUid = () => `u${++uidCounter}`;

// IDs of courses that are auto-loaded and cannot be repeated/removed
const REQUIRED_IDS = new Set(Object.values(REQUIRED).flat());

function seedRequired() {
  const seeded = [];
  for (const year of YEARS) {
    for (const id of (REQUIRED[year] || [])) {
      const c = COURSE_BY_ID[id];
      if (!c) continue;
      const [cid, name, credits, level] = c;
      const passFail = PASS_FAIL.has(name);
      seeded.push({ uid: nextUid(), id: cid, name, credits, level, passFail, year, required: true,
        grade: passFail ? null : PLANNED, result: passFail ? PLANNED : null });
    }
  }
  return seeded;
}

let enrolled = seedRequired();
let currentYear = "Freshman";
let viewMode = 'list';            // 'list' | 'grid' (board)
let classModalUid = null;         // uid of class shown in the board's popup editor
let pendingInsertAfterUid = null; // when a "Select Course" slot is clicked, the next added class goes right after this uid
let notesModalYear = null;        // year whose notes popup is open (list view)
let yearNotes = { Freshman:'', Sophomore:'', Junior:'', Senior:'' };
const escapeHtml = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// grow a textarea to fit its content (CSS min-height sets the floor); no manual drag handle
const autoGrow = (el) => { if(!el) return; el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px'; };
let yearCollapsed = { Freshman:false, Sophomore:false, Junior:false, Senior:false };
let strandOpen = new Set();
function toggleStrand(uid){ if(strandOpen.has(uid)) strandOpen.delete(uid); else strandOpen.add(uid); render(); }
function strandPanelHTML(e){
  let body = '';
  if(e.strandCount){
    const names = e.strandNames||[], levels = e.strandLevels||[];
    let nameCells='', levelCells='';
    for(let i=0;i<e.strandCount;i++){
      nameCells += `<td><input class="strand-name" data-uid="${e.uid}" data-i="${i}" placeholder="Insert strand name" value="${(names[i]||'').replace(/"/g,'&quot;')}"></td>`;
      const opts = `<option value="">—</option>` + STRAND_OPTIONS.map(([v])=>`<option value="${v}" ${levels[i]===v?'selected':''}>${v}</option>`).join('');
      levelCells += `<td><select class="strand-level" data-uid="${e.uid}" data-i="${i}">${opts}</select></td>`;
    }
    const total = strandTotal(e), fmt = total%1===0?total:total.toFixed(1);
    const result = strandComplete(e)
      ? `Total <b>${fmt}</b> pts · Grade <b class="strand-grade-pill">${strandGradeOf(e)}</b>`
      : `<span style="color:var(--md-on-surface-variant)">Pick a level for every strand to compute the grade.</span>`;
    body = `<div class="strand-table-wrap"><table class="strand-table"><tbody>
        <tr>${nameCells}</tr><tr>${levelCells}</tr></tbody></table></div>
      <div class="strand-result">${result}</div>`;
  }
  return `<div class="strand-panel">
      <div class="strand-top"><span class="label-medium">Strands assessed on:</span>
        <select class="strand-count" data-uid="${e.uid}">
          <option value="" ${!e.strandCount?'selected':''}>—</option>
          <option value="3" ${e.strandCount===3?'selected':''}>3 strands</option>
          <option value="4" ${e.strandCount===4?'selected':''}>4 strands</option>
          <option value="5" ${e.strandCount===5?'selected':''}>5 strands</option>
        </select></div>
      ${body}
    </div>`;
}

const searchEl = document.getElementById('search');
const resultsEl = document.getElementById('results');

document.getElementById('yearPicker').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  currentYear = b.dataset.year;
  pendingInsertAfterUid = null;
  document.querySelectorAll('#yearPicker button').forEach(x => x.classList.toggle('sel', x === b));
  updateFwLabel();
  if (searchEl.value) searchEl.dispatchEvent(new Event('input'));
});

searchEl.addEventListener('input', () => {
  const q = searchEl.value.toLowerCase().trim();
  resultsEl.innerHTML = '';
  if (!q) return;
  const matches = getCourseList().filter(c => c[1].toLowerCase().includes(q) || c[0].toLowerCase().includes(q)).slice(0,30);
  if (!matches.length) { resultsEl.innerHTML = `<div class="list-item"><div class="meta"><div class="body-medium" style="color:var(--md-on-surface-variant)">No matches found</div></div></div>`; return; }
  matches.forEach(c => {
    const [id,name,credits,level] = c;
    const pf = PASS_FAIL.has(name);
    const isRequired = REQUIRED_IDS.has(id);     // already loaded + locked
    const timesAdded = enrolled.filter(e => e.id === id).length;
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="icon-wrap"><span class="material-symbols-rounded">${pf?'check_circle':'grade'}</span></div>
      <div class="meta"><div class="name body-large">${name}</div><div class="sub label-medium">${id}${(!isRequired && timesAdded)?` · added ${timesAdded}×`:''}</div></div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:flex-end;">
        <span class="chip credit">${credits===1?'1 credit':'½ credit'}</span>
        ${level>=5?'<span class="chip level">AP/College</span>':''}
        ${pf?'<span class="chip pf">Pass/Fail</span>':''}
        <span class="material-symbols-rounded" style="color:${isRequired?'var(--md-outline-variant)':'var(--md-on-surface-variant)'};">${isRequired?'lock':'add'}</span>
      </div>`;
    item.onclick = () => addClass(c);
    resultsEl.appendChild(item);
  });
});

function addClass(c) {
  const [id,name,credits,level] = c;
  if (!(document.getElementById('gradYear').value || '').trim()) {
    showAlert("Pick your graduation year in the top-right first. That tells the planner which year's course list applies to each grade level.");
    return;
  }
  if (REQUIRED_IDS.has(id)) { showSnack(`${name} is required and is already in your plan`); return; }
  const passFail = PASS_FAIL.has(name);
  const entry = { uid: nextUid(), id,name,credits,level,passFail, year: currentYear, required: false,
    grade: passFail ? null : PLANNED, result: passFail ? PLANNED : null };
  // if the user clicked a half-width "Select Course" filler, drop the new class right next to that
  // lone half so the two pair into one row (instead of appending it as a new row)
  const anchorIdx = (pendingInsertAfterUid && isHalfWidth(entry))
    ? enrolled.findIndex(e => e.uid === pendingInsertAfterUid && e.year === currentYear)
    : -1;
  if (anchorIdx >= 0) enrolled.splice(anchorIdx + 1, 0, entry); else enrolled.push(entry);
  pendingInsertAfterUid = null;
  searchEl.value=''; resultsEl.innerHTML=''; searchEl.focus();
  render(); showSnack(`Added ${name} to ${currentYear}`);
}
function removeClass(uid) {
  const c = enrolled.find(e => e.uid === uid);
  if (c && c.required) { showSnack(`${c.name} is required and can't be removed`); return; }
  enrolled = enrolled.filter(e => e.uid !== uid);
  render(); if (c) showSnack(c.isFree ? `Removed a ${c.freeHalf?'½ ':''}free period` : `Removed ${c.name}`);
}

// board-view free period: an ordered entry in `enrolled`, but with 0 credits and no academic effect
// Wellness 9 (PE 1802) is only ½ a credit but runs the full year, so on the board it fills a whole
// row like a 1-credit class. This affects board layout only — it still counts as ½ a credit for GPA/graduation.
const FULLWIDTH_YEARLONG = new Set(['PE 1802']);
function isHalfWidth(e){
  if (!e) return false;
  if (e.isFree) return !!e.freeHalf;
  if (FULLWIDTH_YEARLONG.has(e.id)) return false;
  return (e.credits || 1) < 1;
}
// how many row-units a year uses (full block = 1, half block = 0.5); a column holds 8
function yearUnits(year){ return enrolled.filter(e => e.year === year).reduce((s,e)=> s + (isHalfWidth(e)?0.5:1), 0); }
function addFree(year, half){
  const need = half ? 0.5 : 1;
  if (yearUnits(year) + need > 8 + 1e-9){ showSnack(`${year} year is full`); return; }
  enrolled.push({ uid: nextUid(), id:'FREE', name:'Free', credits:0, level:0, passFail:false,
    year, required:false, grade: PLANNED, result:null, isFree:true, freeHalf:!!half });
  render(); showSnack(`Added a ${half?'½ ':''}free period to ${year}`);
}

/* GPA over a list, ignoring planned + pass/fail */
function computeGPA(list) {
  const graded = list.filter(e => !e.isFree && !e.passFail && e.grade !== PLANNED);
  if (!graded.length) return null;
  const cr = graded.reduce((s,e)=>s+e.credits,0);
  const uw = graded.reduce((s,e)=>s+GRADE_POINTS[e.grade]*e.credits,0)/cr;
  const w  = graded.reduce((s,e)=>s+(GRADE_POINTS[e.grade]+(e.level>=5?1:0))*e.credits,0)/cr;
  return { uw, w, credits: cr };
}
function standing(g){if(g>=3.67)return"A range — Excellent!";if(g>=3.0)return"B range — Good";if(g>=2.0)return"C range — Satisfactory";if(g>=1.0)return"D range — Poor";return"F range — Failing";}

/* ---- Drag-and-drop: reorder classes WITHIN their own year only ---- */
let dragUid = null;
function clearDropMarks(){ document.querySelectorAll('.class-row.drop-before,.class-row.drop-after').forEach(r=>r.classList.remove('drop-before','drop-after')); }
function dropAfterTarget(row, clientY){ const r=row.getBoundingClientRect(); return (clientY - r.top) > r.height/2; }
function onRowDragStart(e){
  dragUid = e.currentTarget.dataset.uid;
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  try { e.dataTransfer.setData('text/plain', dragUid); } catch(_){}
}
function onRowDragEnd(e){
  e.currentTarget.classList.remove('dragging');
  e.currentTarget.draggable = false;
  dragUid = null; clearDropMarks();
}
function sameYearAsDrag(row){
  const dragged = enrolled.find(x => x.uid === dragUid);
  return dragged && dragged.year === row.dataset.year;
}
function onRowDragOver(e){
  const row = e.currentTarget;
  if (!sameYearAsDrag(row)) { e.dataTransfer.dropEffect = 'none'; return; }
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const after = dropAfterTarget(row, e.clientY);
  row.classList.toggle('drop-after', after);
  row.classList.toggle('drop-before', !after);
}
function onRowDragLeave(e){ e.currentTarget.classList.remove('drop-before','drop-after'); }
function onRowDrop(e){
  const row = e.currentTarget;
  if (!sameYearAsDrag(row) || dragUid === row.dataset.uid) { clearDropMarks(); return; }
  e.preventDefault();
  const after = dropAfterTarget(row, e.clientY);
  reorderWithinYear(dragUid, row.dataset.uid, after);
  render();
}
function reorderWithinYear(fromUid, targetUid, after){
  const di = enrolled.findIndex(e => e.uid === fromUid);
  if (di < 0) return;
  const dragged = enrolled.splice(di, 1)[0];
  let ti = enrolled.findIndex(e => e.uid === targetUid);
  if (ti < 0) { enrolled.splice(di, 0, dragged); return; }
  if (after) ti++;
  enrolled.splice(ti, 0, dragged);
}

/* ---- Board pill drag: reorder within year.
       Dragging a FULL-width item treats a pair of half-credit classes as ONE boxed row,
       so it snaps above/below the whole pair (never splits it).
       Dragging a HALF-width item only reorders among other half-width items. ---- */
function dragDropAllowed(targetUid){
  const a = enrolled.find(x=>x.uid===dragUid), b = enrolled.find(x=>x.uid===targetUid);
  if(!a || !b || a.year!==b.year) return false;
  if(isHalfWidth(a)) return isHalfWidth(b);   // dragging a half: only onto another half
  return true;                                // dragging a full: onto any item in the year
}
// group a year's items into rows: full item = box of 1; two consecutive halves = a boxed pair
function rowsForYear(year){
  const items = enrolled.filter(e => e.year === year);
  const boxes = []; let i = 0;
  while (i < items.length){
    if (isHalfWidth(items[i]) && i+1 < items.length && isHalfWidth(items[i+1])){ boxes.push([items[i].uid, items[i+1].uid]); i += 2; }
    else { boxes.push([items[i].uid]); i += 1; }
  }
  return boxes;
}
function boxOf(year, uid){ return rowsForYear(year).find(b => b.includes(uid)) || [uid]; }
function clearDropTargets(){ document.querySelectorAll('.course-pill.drop-target').forEach(p=>p.classList.remove('drop-target')); }
// reorder a year's items to a new uid order (positions of other years' items untouched)
function reorderYearByUids(year, uidOrder){
  const byUid = new Map(enrolled.map(e => [e.uid, e]));
  let k = 0;
  enrolled = enrolled.map(e => e.year === year ? byUid.get(uidOrder[k++]) : e);
}
// swap the dragged item's ROW (box) with the target's ROW — a half pair moves as one unit
function swapBoxes(year, uidA, uidB){
  const boxes = rowsForYear(year);
  const ia = boxes.findIndex(b => b.includes(uidA));
  const ib = boxes.findIndex(b => b.includes(uidB));
  if (ia < 0 || ib < 0 || ia === ib) return;
  [boxes[ia], boxes[ib]] = [boxes[ib], boxes[ia]];
  reorderYearByUids(year, boxes.flat());
}
// swap two individual items' positions
function swapItems(year, uidA, uidB){
  const order = enrolled.filter(e => e.year === year).map(e => e.uid);
  const ia = order.indexOf(uidA), ib = order.indexOf(uidB);
  if (ia < 0 || ib < 0 || ia === ib) return;
  [order[ia], order[ib]] = [order[ib], order[ia]];
  reorderYearByUids(year, order);
}
function onPillDragStart(e){
  dragUid = e.currentTarget.dataset.uid;
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  try { e.dataTransfer.setData('text/plain', dragUid); } catch(_){}
}
function onPillDragEnd(e){
  e.currentTarget.classList.remove('dragging');
  dragUid = null; clearIndicators();
}
function clearIndicators(){
  document.querySelectorAll('.course-pill.drop-target,.course-pill.ins-before,.course-pill.ins-after')
    .forEach(p=>p.classList.remove('drop-target','ins-before','ins-after'));
}
// which third of the target the cursor is over → 'before' | 'swap' | 'after'
function dropZone(pill, e){
  const half = pill.classList.contains('half');
  const r = pill.getBoundingClientRect();
  const p = half ? (e.clientX - r.left)/r.width : (e.clientY - r.top)/r.height;
  if (p < 0.30) return 'before';
  if (p > 0.70) return 'after';
  return 'swap';
}
// an empty "Select Course" slot only accepts a dragged item of matching width
function emptyAccepts(pill){
  const dragged = enrolled.find(x=>x.uid===dragUid);
  return dragged && (isHalfWidth(dragged) === pill.classList.contains('half'));
}
// move an item to just after anchorUid (or to the end of its year when no anchor)
function moveItemAfter(fromUid, anchorUid){
  const dragged = enrolled.find(e=>e.uid===fromUid); if(!dragged) return;
  const di = enrolled.findIndex(e=>e.uid===fromUid); enrolled.splice(di,1);
  if (anchorUid){
    const ai = enrolled.findIndex(e=>e.uid===anchorUid);
    enrolled.splice(ai<0 ? enrolled.length : ai+1, 0, dragged);
  } else {
    let last=-1; enrolled.forEach((e,i)=>{ if(e.year===dragged.year) last=i; });
    enrolled.splice(last+1, 0, dragged);
  }
}
// insert a full-width item before/after a WHOLE box (keeps half pairs intact)
function moveFullBeforeAfterBox(fromUid, targetUid, after){
  const dragged = enrolled.find(e=>e.uid===fromUid); if(!dragged) return;
  const box = boxOf(dragged.year, targetUid);
  const anchor = after ? box[box.length-1] : box[0];
  const di = enrolled.findIndex(e=>e.uid===fromUid); enrolled.splice(di,1);
  let ai = enrolled.findIndex(e=>e.uid===anchor);
  if (ai < 0) { enrolled.splice(di,0,dragged); return; }
  enrolled.splice(after ? ai+1 : ai, 0, dragged);
}
function onPillDragOver(e){
  const pill = e.currentTarget;
  clearIndicators();
  if (pill.classList.contains('empty')){            // "Select Course" slot
    if (!dragUid || !emptyAccepts(pill)) { e.dataTransfer.dropEffect='none'; return; }
    e.preventDefault(); e.dataTransfer.dropEffect='move';
    pill.classList.add('drop-target');
    return;
  }
  if (!dragUid || pill.dataset.uid===dragUid || !dragDropAllowed(pill.dataset.uid)) { e.dataTransfer.dropEffect='none'; return; }
  e.preventDefault(); e.dataTransfer.dropEffect='move';
  const dragged = enrolled.find(x=>x.uid===dragUid);
  const zone = dropZone(pill, e);
  if (zone === 'swap'){
    if (!isHalfWidth(dragged)){                      // highlight the whole target row
      const t = enrolled.find(x=>x.uid===pill.dataset.uid);
      boxOf(t.year, pill.dataset.uid).forEach(uid=>{ const el=document.querySelector(`.course-pill[data-uid="${uid}"]`); if(el) el.classList.add('drop-target'); });
    } else pill.classList.add('drop-target');
  } else {
    pill.classList.add(zone === 'before' ? 'ins-before' : 'ins-after');
  }
}
function onPillDragLeave(e){ /* cleared on next dragover/drop/end */ }
function onPillDrop(e){
  const pill = e.currentTarget;
  if (!dragUid) { clearIndicators(); return; }
  const dragged = enrolled.find(x=>x.uid===dragUid);
  if (pill.classList.contains('empty')){            // drop into an open slot
    if (!emptyAccepts(pill)) { clearIndicators(); return; }
    e.preventDefault();
    moveItemAfter(dragUid, pill.dataset.anchor || null);
    clearIndicators(); render(); return;
  }
  if (pill.dataset.uid===dragUid || !dragDropAllowed(pill.dataset.uid)) { clearIndicators(); return; }
  e.preventDefault();
  const zone = dropZone(pill, e);
  if (zone === 'swap'){
    if (isHalfWidth(dragged)) swapItems(dragged.year, dragUid, pill.dataset.uid);
    else swapBoxes(dragged.year, dragUid, pill.dataset.uid);
  } else {
    const after = zone === 'after';
    if (isHalfWidth(dragged)) reorderWithinYear(dragUid, pill.dataset.uid, after);
    else moveFullBeforeAfterBox(dragUid, pill.dataset.uid, after);
  }
  clearIndicators(); render();
}

/* ===================== Planner grid view ===================== */

// ---- Per-year reset (both views) with a centered confirmation ----
function resetYear(year){
  const removed = enrolled.filter(e => e.year===year && !e.required).length;
  enrolled = enrolled.filter(e => e.year!==year || e.required);
  if (classModalUid && !enrolled.some(e=>e.uid===classModalUid)) classModalUid = null;
  render();
  showSnack(`Cleared ${year} year — ${removed} removed`);
}
let _confirmCb = null;
function confirmDialog({ title, message, confirmLabel='Confirm', icon='restart_alt', onConfirm }){
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMsg').textContent = message;
  document.getElementById('confirmOk').textContent = confirmLabel;
  document.getElementById('confirmIcon').textContent = icon;
  _confirmCb = onConfirm;
  document.getElementById('confirmModal').classList.remove('hidden');
}
function closeConfirm(){ document.getElementById('confirmModal').classList.add('hidden'); _confirmCb = null; }
function confirmResetYear(year){
  const cnt = enrolled.filter(e => e.year===year && !e.required).length;
  if (!cnt){ showSnack(`${year} year is already empty`); return; }
  confirmDialog({
    title: `Reset ${year} year?`,
    message: `This removes all ${cnt} item${cnt>1?'s':''} from ${year} year — classes and free periods. This can't be undone.`,
    confirmLabel: 'Reset year',
    icon: 'restart_alt',
    onConfirm: () => resetYear(year)
  });
}


/* ---------- Board (grid) view + click-to-edit class popup ---------- */
function renderGrid(wrap){
  const board = document.createElement('div');
  board.className = 'board';
  YEARS.forEach(year => {
    const list = enrolled.filter(e => e.year === year);   // classes + free periods, in order
    const col = document.createElement('div');
    col.className = 'board-col card';

    const classPill = (e) => {
      const dm = DEPT_META[deptOf(e.id)] || DEPT_META['Elective'];
      const half = isHalfWidth(e);
      const mk = e.passFail
        ? (e.result && e.result!==PLANNED ? e.result : '')
        : (e.grade && e.grade!==PLANNED ? e.grade : '');
      return `<button class="course-pill${half?' half':''}" draggable="true" data-uid="${e.uid}" style="--c:${dm.c}" title="${e.name.replace(/"/g,'&quot;')}"><span class="cp-name">${e.name}</span>${mk?`<span class="cp-grade">${mk}</span>`:''}</button>`;
    };
    const freePill = (e) =>
      `<div class="course-pill free${isHalfWidth(e)?' half':''}" draggable="true" data-uid="${e.uid}" data-free="1" title="Free period"><span class="cp-name">Free</span><button class="free-x" data-freex="${e.uid}" title="Remove free period"><span class="material-symbols-rounded">close</span></button></div>`;
    const emptyPill = (half, anchor) => `<button class="course-pill empty${half?' half':''}" data-add="${year}" data-anchor="${anchor||''}">Select Course</button>`;

    // render row by row: full = its own row; two consecutive halves share a row;
    // a lone half gets a half-width "Select Course" filler beside it (so the row is never half-empty)
    const byUid = new Map(list.map(e => [e.uid, e]));
    const boxes = rowsForYear(year);
    let pills = '', units = 0;
    boxes.forEach(box => {
      box.forEach(uid => { const e = byUid.get(uid); pills += e.isFree ? freePill(e) : classPill(e); });
      if (box.length === 1 && isHalfWidth(byUid.get(box[0]))) pills += emptyPill(true, box[0]);  // filler anchored beside the lone half
      units += 1;   // every row is one slot
    });
    let remaining = Math.max(0, 8 - units);
    while (remaining >= 1) { pills += emptyPill(false, ''); remaining -= 1; }

    const usedUnits = list.reduce((s,e)=> s + (isHalfWidth(e)?0.5:1), 0);
    const fullFits = usedUnits + 1   <= 8 + 1e-9;
    const halfFits = usedUnits + 0.5 <= 8 + 1e-9;
    col.innerHTML = `${ list.length ? `<button class="icon-btn board-reset year-reset" data-year="${year}" title="Reset ${year} year"><span class="material-symbols-rounded">restart_alt</span></button>` : '' }
      <div class="board-col-title">${year} Year</div>
      <div class="board-pills">${pills}</div>
      <div class="board-add-row">
        <button class="board-add-free" data-addfree="${year}" data-aftype="full" ${fullFits?'':'disabled'} title="${fullFits?'Add a free period':'No room for a full free period'}"><span class="material-symbols-rounded">add</span>Free</button>
        <button class="board-add-free" data-addfree="${year}" data-aftype="half" ${halfFits?'':'disabled'} title="${halfFits?'Add a half free period':'Year is full'}"><span class="material-symbols-rounded">add</span>½ Free</button>
      </div>
      <div class="board-notes-wrap">
        <div class="board-notes-label">Notes</div>
        <textarea class="board-notes" data-notes="${year}" rows="2">${escapeHtml(yearNotes[year]||'')}</textarea>
      </div>`;
    board.appendChild(col);
  });
  wrap.appendChild(board);

  // class pills: click opens editor; all draggable
  wrap.querySelectorAll('.course-pill[data-uid]:not([data-free])').forEach(b=>{
    b.onclick = () => openClassModal(b.dataset.uid);
  });
  // every class/free pill is draggable
  wrap.querySelectorAll('.course-pill[data-uid]').forEach(b=>{
    b.addEventListener('dragstart', onPillDragStart);
    b.addEventListener('dragend',   onPillDragEnd);
    b.addEventListener('dragover',  onPillDragOver);
    b.addEventListener('dragleave', onPillDragLeave);
    b.addEventListener('drop',      onPillDrop);
  });
  wrap.querySelectorAll('.free-x[data-freex]').forEach(b=>b.onclick=(ev)=>{
    ev.stopPropagation();
    removeClass(b.dataset.freex);
  });
  wrap.querySelectorAll('.board-add-free[data-addfree]').forEach(b=>b.onclick=()=>{
    addFree(b.dataset.addfree, b.dataset.aftype==='half');
  });
  wrap.querySelectorAll('.board-notes[data-notes]').forEach(t=>{
    autoGrow(t);
    t.addEventListener('input', () => { yearNotes[t.dataset.notes] = t.value; autoGrow(t); saveState(); });
  });
  wrap.querySelectorAll('.board-reset[data-year]').forEach(b=>b.onclick=(ev)=>{
    ev.stopPropagation();
    confirmResetYear(b.dataset.year);
  });
  // empty "Select Course" slots accept dropped classes (and stay clickable to add via search)
  wrap.querySelectorAll('.course-pill.empty[data-add]').forEach(b=>{
    b.addEventListener('dragover',  onPillDragOver);
    b.addEventListener('dragleave', onPillDragLeave);
    b.addEventListener('drop',      onPillDrop);
    b.onclick = () => {
      currentYear = b.dataset.add;
      pendingInsertAfterUid = b.dataset.anchor || null;   // half-filler slots carry the lone-half uid
      document.querySelectorAll('#yearPicker button').forEach(x=>x.classList.toggle('sel', x.dataset.year===currentYear));
      updateFwLabel();
      const srch = document.getElementById('search');
      if(srch){ srch.focus(); srch.scrollIntoView({behavior:'smooth', block:'center'}); }
    };
  });
}

function openClassModal(uid){ classModalUid = uid; render(); }
function closeClassModal(){ classModalUid = null; render(); }

function openNotesModal(year){
  notesModalYear = year;
  document.getElementById('notesTitle').textContent = `${year} — Notes`;
  const t = document.getElementById('notesText');
  t.value = yearNotes[year] || '';
  document.getElementById('notesModal').classList.remove('hidden');
  autoGrow(t);
  t.focus();
}
function closeNotesModal(){ document.getElementById('notesModal').classList.add('hidden'); notesModalYear = null; render(); }

function renderClassModal(){
  const ov = document.getElementById('classModal');
  if(!ov) return;
  const e = enrolled.find(x => x.uid === classModalUid);
  if(!e || e.isFree){ ov.classList.add('hidden'); ov.innerHTML=''; classModalUid=null; return; }
  const dm = DEPT_META[deptOf(e.id)] || DEPT_META['Elective'];

  const gradeCtl = e.passFail
    ? `<select class="pf-select" data-uid="${e.uid}">
         <option value="${PLANNED}" ${e.result===PLANNED?'selected':''}>Planned</option>
         <option value="Pass" ${e.result==='Pass'?'selected':''}>Pass</option>
         <option value="Fail" ${e.result==='Fail'?'selected':''}>Fail</option></select>`
    : `<select class="grade-select" data-uid="${e.uid}">
         <option value="${PLANNED}" ${e.grade===PLANNED?'selected':''}>Planned</option>
         ${GRADE_ORDER.map(x=>`<option value="${x}" ${e.grade===x?'selected':''}>${x}</option>`).join('')}</select>`;

  ov.innerHTML = `
    <div class="modal-card class-modal">
      <div class="cm-head">
        <span class="dept-badge" style="--c:${dm.c}"><span class="material-symbols-rounded">${dm.i}</span></span>
        <div><div class="cm-name">${e.name}</div>
          <div class="cm-sub">${e.id} · ${e.credits} cr${e.passFail?' · Pass/Fail':''}</div></div>
        <button class="icon-btn cm-close" title="Close"><span class="material-symbols-rounded">close</span></button>
      </div>
      <div class="cm-row">
        <span class="label-medium">${e.passFail?'Result':'Letter grade'}</span>
        ${gradeCtl}
      </div>
      ${e.passFail ? '' : strandPanelHTML(e)}
      <div class="cm-foot">
        <button class="btn text cm-remove"><span class="material-symbols-rounded">delete</span>Remove class</button>
      </div>
    </div>`;
  ov.classList.remove('hidden');

  // wire (scoped to the modal)
  ov.onclick = (ev)=>{ if(ev.target===ov) closeClassModal(); };
  ov.querySelector('.cm-close').onclick = closeClassModal;
  ov.querySelector('.cm-remove').onclick = ()=>{ classModalUid=null; removeClass(e.uid); };
  ov.querySelectorAll('.grade-select').forEach(s=>s.onchange=()=>{ e.grade=s.value; if(e.strandCount){e.strandLevels=new Array(e.strandCount).fill('');} render(); });
  ov.querySelectorAll('.pf-select').forEach(s=>s.onchange=()=>{ e.result=s.value; render(); });
  ov.querySelectorAll('.strand-count').forEach(s=>s.onchange=()=>{
    const c=parseInt(s.value,10);
    if(!c){ e.strandCount=null; e.strandNames=[]; e.strandLevels=[]; }
    else { e.strandCount=c;
      e.strandNames=(e.strandNames||[]).slice(0,c); while(e.strandNames.length<c) e.strandNames.push('');
      e.strandLevels=(e.strandLevels||[]).slice(0,c); while(e.strandLevels.length<c) e.strandLevels.push('');
      syncStrandGrade(e); }
    render();
  });
  ov.querySelectorAll('.strand-level').forEach(s=>s.onchange=()=>{ e.strandLevels=e.strandLevels||[]; e.strandLevels[+s.dataset.i]=s.value; syncStrandGrade(e); render(); });
  ov.querySelectorAll('.strand-name').forEach(inp=>inp.oninput=()=>{ e.strandNames=e.strandNames||[]; e.strandNames[+inp.dataset.i]=inp.value; saveState(); });
}

function render() {
  const wrap = document.getElementById('yearSections');
  wrap.innerHTML = '';
  document.getElementById('yearSections').classList.toggle('grid-mode', viewMode === 'grid');
  const layoutEl = document.querySelector('.layout');
  if (layoutEl) layoutEl.classList.toggle('board-layout', viewMode === 'grid');

  if (viewMode === 'grid') { renderGrid(wrap); }
  else {

  YEARS.forEach((year, yi) => {
    const list = enrolled.filter(e => e.year === year && !e.isFree);
    const section = document.createElement('div');
    section.className = 'year-section';
    section.dataset.grade = ['9','10','11','12'][yi];

    const g = computeGPA(list);
    const totCr = list.reduce((s,e)=>s+e.credits,0);
    const collapsed = !!yearCollapsed[year];
    const head = document.createElement('div');
    head.className = 'year-head' + (collapsed ? ' collapsed' : '');
    head.innerHTML = `
      <div class="head-left">
        <span class="material-symbols-rounded chev">expand_more</span>
        <div>
          <div class="title-medium">${year}</div>
          <div class="label-medium" style="color:var(--md-on-surface-variant)">${list.length? list.length+' class'+(list.length>1?'es':'')+' · '+totCr+' cr':'no classes yet'}</div>
        </div>
      </div>
      <div class="head-right">
        <button class="icon-btn year-notes" data-year="${year}" title="Notes for ${year}"><span class="material-symbols-rounded">${yearNotes[year]?'sticky_note_2':'note_add'}</span></button>
        ${ enrolled.some(e=>e.year===year && !e.required) ? `<button class="icon-btn year-reset" data-year="${year}" title="Reset ${year} year"><span class="material-symbols-rounded">restart_alt</span></button>` : '' }
        <div class="gpa-chip">
          ${g ? `<span class="chip credit">UW ${g.uw.toFixed(2)}</span><span class="chip level">W ${g.w.toFixed(2)}</span>` : `<span class="chip" style="background:var(--md-surface-cont-highest);color:var(--md-on-surface-variant)">No grades yet</span>`}
        </div>
      </div>`;
    head.onclick = () => { yearCollapsed[year] = !yearCollapsed[year]; render(); };
    head.querySelector('.year-notes')?.addEventListener('click', ev => { ev.stopPropagation(); openNotesModal(year); });
    head.querySelector('.year-reset')?.addEventListener('click', ev => { ev.stopPropagation(); confirmResetYear(year); });
    section.appendChild(head);

    if (collapsed) { wrap.appendChild(section); return; }

    const card = document.createElement('div');
    card.className = 'card';
    if (!list.length) {
      card.innerHTML = `<div class="year-empty body-medium">Select “${year}” above, then search to add a class.</div>`;
    } else {
      list.forEach(e => {
        const row = document.createElement('div');
        row.className = 'class-row';
        row.dataset.uid = e.uid;
        row.dataset.year = e.year;
        const crLabel = e.credits===1?'1 credit':'½ credit';
        const lvlLabel = e.level>=5?' · AP/College':'';
        let control;
        if (e.passFail) {
          control = `<select class="pf-select" data-uid="${e.uid}">
            <option value="${PLANNED}" ${e.result===PLANNED?'selected':''}>Planned</option>
            <option value="Pass" ${e.result==='Pass'?'selected':''}>Pass</option>
            <option value="Fail" ${e.result==='Fail'?'selected':''}>Fail</option></select>`;
        } else {
          control = `<select class="grade-select" data-uid="${e.uid}">
            <option value="${PLANNED}" ${e.grade===PLANNED?'selected':''}>Planned</option>
            ${GRADE_ORDER.map(x=>`<option value="${x}" ${e.grade===x?'selected':''}>${x}</option>`).join('')}</select>`;
        }
        const reqLabel = e.required ? ' · <b style="color:var(--md-primary)">Required</b>' : '';
        const strandLabel = e.strandCount ? ` · ${e.strandCount}-strand` : '';
        const dm = DEPT_META[deptOf(e.id)] || DEPT_META["Elective"];
        const deleteBtn = e.required
          ? `<span class="icon-btn" title="Required course — cannot remove" style="color:var(--md-outline-variant);cursor:default;"><span class="material-symbols-rounded">lock</span></span>`
          : `<button class="icon-btn" title="Remove" data-remove="${e.uid}"><span class="material-symbols-rounded">delete</span></button>`;
        const open = strandOpen.has(e.uid);
        const expander = e.passFail
          ? `<span class="icon-btn" style="visibility:hidden;pointer-events:none" aria-hidden="true"></span>`
          : `<button class="icon-btn strand-toggle" data-uid="${e.uid}" title="Grade by strands"><span class="material-symbols-rounded">${open?'expand_less':'tune'}</span></button>`;
        row.innerHTML = `
          <span class="drag-handle" title="Drag to reorder within ${e.year}"><span class="material-symbols-rounded">drag_indicator</span></span>
          <span class="dept-badge" style="--c:${dm.c}"><span class="material-symbols-rounded">${dm.i}</span></span>
          <div class="info" ${e.passFail?'':`data-toggle="${e.uid}" style="cursor:pointer"`}><div class="name body-large">${e.name}</div>
          <div class="detail label-medium">${e.id} · ${crLabel}${lvlLabel}${e.passFail?' · Pass/Fail':''}${strandLabel}${reqLabel}</div></div>
          ${control}
          ${expander}
          ${deleteBtn}`;
        card.appendChild(row);
        if (!e.passFail && open) {
          const panel = document.createElement('div');
          panel.className = 'strand-panel-wrap';
          panel.innerHTML = strandPanelHTML(e);
          card.appendChild(panel);
        }
      });
    }
    section.appendChild(card);
    wrap.appendChild(section);
  });

  // wire controls
  wrap.querySelectorAll('.grade-select').forEach(s=>s.onchange=()=>{const e=enrolled.find(x=>x.uid===s.dataset.uid);if(!e)return;e.grade=s.value;if(e.strandCount){e.strandLevels=new Array(e.strandCount).fill('');}render();});
  wrap.querySelectorAll('.pf-select').forEach(s=>s.onchange=()=>{const e=enrolled.find(x=>x.uid===s.dataset.uid);if(e){e.result=s.value;render();}});
  wrap.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>removeClass(b.dataset.remove));

  // strand-based grading
  wrap.querySelectorAll('.strand-toggle').forEach(b=>b.onclick=(ev)=>{ev.stopPropagation();toggleStrand(b.dataset.uid);});
  wrap.querySelectorAll('.info[data-toggle]').forEach(el=>el.onclick=()=>toggleStrand(el.dataset.toggle));
  wrap.querySelectorAll('.strand-count').forEach(s=>s.onchange=()=>{
    const e=enrolled.find(x=>x.uid===s.dataset.uid); if(!e) return;
    const c=parseInt(s.value,10);
    if(!c){ e.strandCount=null; e.strandNames=[]; e.strandLevels=[]; }
    else {
      e.strandCount=c;
      e.strandNames=(e.strandNames||[]).slice(0,c); while(e.strandNames.length<c) e.strandNames.push('');
      e.strandLevels=(e.strandLevels||[]).slice(0,c); while(e.strandLevels.length<c) e.strandLevels.push('');
      syncStrandGrade(e);
    }
    strandOpen.add(e.uid); render();
  });
  wrap.querySelectorAll('.strand-level').forEach(s=>s.onchange=()=>{
    const e=enrolled.find(x=>x.uid===s.dataset.uid); if(!e) return;
    e.strandLevels=e.strandLevels||[]; e.strandLevels[+s.dataset.i]=s.value;
    syncStrandGrade(e); render();
  });
  wrap.querySelectorAll('.strand-name').forEach(inp=>inp.oninput=()=>{
    const e=enrolled.find(x=>x.uid===inp.dataset.uid); if(!e) return;
    e.strandNames=e.strandNames||[]; e.strandNames[+inp.dataset.i]=inp.value; saveState();
  });

  // drag-and-drop reordering (within the same year only)
  wrap.querySelectorAll('.class-row').forEach(row => {
    const handle = row.querySelector('.drag-handle');
    if (handle) {
      handle.addEventListener('mousedown', () => { row.draggable = true; });
      handle.addEventListener('mouseup',   () => { row.draggable = false; });
    }
    row.addEventListener('dragstart', onRowDragStart);
    row.addEventListener('dragend',   onRowDragEnd);
    row.addEventListener('dragover',  onRowDragOver);
    row.addEventListener('dragleave', onRowDragLeave);
    row.addEventListener('drop',      onRowDrop);
  });

  } // end list-view branch

  // view-toggle button label + class popup
  const vt = document.getElementById('viewToggle');
  if(vt) vt.innerHTML = viewMode==='grid'
    ? '<span class="material-symbols-rounded">view_list</span>List view'
    : '<span class="material-symbols-rounded">grid_view</span>Board view';
  renderClassModal();

  renderRequirements();
  computeCumulative();
  saveState();
}

/* ============================================================
   GRADUATION REQUIREMENT CHECK
   Each course contributes "earned" credit if completed & passing,
   or "planned" credit if still Planned. Both count toward on-track.
   ============================================================ */
function creditState(e) {
  // returns 'earned' | 'planned' | 'none'  (used for GPA + progress bar)
  if (e.passFail) {
    if (e.result === "Pass") return "earned";
    if (e.result === PLANNED) return "planned";
    return "none"; // Fail
  }
  if (e.grade === PLANNED) return "planned";
  return GRADE_POINTS[e.grade] > 0 ? "earned" : "none"; // F earns nothing
}

// For the diploma checklist, a planned course counts as satisfying the
// requirement (you intend to take it). Only a failed/F course is "none".
function securedState(e) {
  const st = creditState(e);
  if (st === "earned") return "secured";
  if (st === "none") return "none";   // failed / F
  return "secured";                    // planned (incl. required) counts
}

function sumBy(filterFn) {
  let secured = 0, planned = 0;
  enrolled.filter(filterFn).forEach(e => {
    const st = securedState(e);
    if (st === "secured") secured += e.credits;
    else if (st === "planned") planned += e.credits;
  });
  return { secured, planned };
}

// Distinct colors per requirement (light-mode friendly, also fine on dark)
const REQ_COLORS = {
  "English":"#b39ddb","Social Studies":"#ffb74d","Science":"#81c784","Math":"#90caf9",
  "Design & Innovation":"#ef9a9a","Language":"#ffd54f","Visual & Performing Arts":"#f48fb1",
  "Health & Wellness":"#90a4ae","Deep Learning Signature":"#a1887f","Electives":"#80cbc4",
};

function checkRequirements() {
  const bars = [];      // department credit bars (with color)
  const warnings = [];  // strings for unmet items
  let met = 0, total = 0;

  const fmt = n => Number.isInteger(n) ? n : n.toFixed(1);

  // --- credit-based department bars ---
  const credBar = (label, need, filterFn) => {
    const { secured, planned } = sumBy(filterFn);
    const projected = secured + planned;
    bars.push({ label, need, projected, color: REQ_COLORS[label] || "#90a4ae" });
    total++;
    if (projected >= need) met++;
    else warnings.push(`You need ${fmt(need - projected)} more credit${(need-projected)===1?'':'s'} of ${label}.`);
  };

  credBar("English", 4, e => deptOf(e.id) === "English" || ENGLISH_EXTRA.has(e.id));
  credBar("Social Studies", 3, e => deptOf(e.id) === "Social Studies");
  credBar("Science", 2, e => deptOf(e.id) === "Science");
  credBar("Math", 2, e => deptOf(e.id) === "Math");
  credBar("Design & Innovation", 1, e => deptOf(e.id) === "Design & Innovation");
  credBar("Language", 2, e => deptOf(e.id) === "World Languages");
  credBar("Visual & Performing Arts", 1.5, e => deptOf(e.id) === "Arts");
  credBar("Health & Wellness", 2, e => deptOf(e.id) === "Wellness");
  credBar("Deep Learning Signature", 2, e => deptOf(e.id) === "Deep Learning");

  // --- Electives: credits beyond each department's minimum ---
  const MINS = { "English":4,"Social Studies":3,"Math":2,"Science":2,
    "World Languages":2,"Wellness":2,"Arts":1.5,"Design & Innovation":1,"Deep Learning":2 };
  const deptCred = {}; let totalCred = 0;
  enrolled.forEach(e => {
    if (securedState(e) === "none") return;
    totalCred += e.credits;
    const d = deptOf(e.id);
    deptCred[d] = (deptCred[d]||0) + e.credits;
  });
  let appliedToMins = 0;
  for (const d in MINS) appliedToMins += Math.min(deptCred[d]||0, MINS[d]);
  const electives = Math.max(0, totalCred - appliedToMins);
  bars.push({ label:"Electives", need:4.5, projected:electives, color:REQ_COLORS["Electives"] });
  total++;
  if (electives >= 4.5) met++;
  else warnings.push(`You need ${fmt(4.5 - electives)} more credits of Electives.`);

  // --- conditional "rule" requirements (warnings only when unmet) ---
  const ruleOK = idSet => enrolled.some(e => idSet.has(e.id) && securedState(e) !== "none");
  const rule = (ok, msg) => { total++; if (ok) met++; else warnings.push(msg); };

  rule(ruleOK(PHYSICAL_SCI), "You need a physical science course (e.g. Chemistry, Physics, or DPC).");
  rule(ruleOK(LIFE_SCI), "You need a life science course (e.g. Biology or AP Biology).");

  // same language, 2 credits
  const langTot = {};
  enrolled.forEach(e => {
    if (deptOf(e.id) !== "World Languages" || securedState(e) === "none") return;
    const n = e.name;
    const f = /Chinese/i.test(n) ? "Chinese" : /Spanish/i.test(n) ? "Spanish" : /Japanese/i.test(n) ? "Japanese" : null;
    if (!f) return;
    langTot[f] = (langTot[f]||0) + e.credits;
  });
  const sameLangOK = Object.values(langTot).some(v => v >= 2);
  rule(sameLangOK, "You need 2 credits of the same world language.");

  rule(ruleOK(DIGITAL_LITERACY), "You need a Digital Literacy course (Tech & Society, Data Science I, Cybersecurity I, or AP CSP).");
  rule(ruleOK(DESIGN_REQ), "You need a Design course (Design Products, Design with Code/Robotics, or AP CSP).");
  rule(ruleOK(STUDY_US), "You need a study of the U.S. course (US History, AP US History, or Race & Ethnic Studies).");
  rule(ruleOK(STUDY_JAPAN), "You need a study of Japan course (Japan Studies, Japan Seminar, or any Japanese language).");

  // English every year
  const englishYears = new Set();
  enrolled.forEach(e => {
    if ((deptOf(e.id) === "English" || ENGLISH_EXTRA.has(e.id)) && securedState(e) !== "none") englishYears.add(e.year);
  });
  const missingEngYear = YEARS.some(y => !englishYears.has(y));
  rule(!missingEngYear, "You need to take an English course every year.");

  return { bars, warnings, met, total };
}

function renderRequirements() {
  const card = document.getElementById('reqCard');
  if (!enrolled.length) { card.style.display='none'; return; }
  card.style.display='block';

  const { bars, warnings, met, total } = checkRequirements();
  const fmt = n => Number.isInteger(n) ? n : n.toFixed(1);

  // bars
  const grid = document.getElementById('barGrid');
  grid.innerHTML = '';
  bars.forEach(b => {
    const pct = Math.min(b.projected / b.need * 100, 100);
    const item = document.createElement('div');
    item.className = 'bar-item';
    item.innerHTML = `
      <div class="bar-top">
        <span class="bar-name">${b.label}</span>
        <span class="bar-count">${fmt(Math.min(b.projected, b.need))}/${fmt(b.need)}</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${b.color}"></div></div>`;
    grid.appendChild(item);
  });

  // warnings
  const warnEl = document.getElementById('warnings');
  warnEl.innerHTML = '';
  if (warnings.length === 0) {
    warnEl.innerHTML = `<div class="warn-ok"><span class="material-symbols-rounded">check_circle</span><span class="body-medium">All graduation requirements are on track!</span></div>`;
  } else {
    warnings.forEach(w => {
      const row = document.createElement('div');
      row.className = 'warn';
      row.innerHTML = `<span class="material-symbols-rounded">warning</span><span class="body-medium">${w}</span>`;
      warnEl.appendChild(row);
    });
  }

  document.getElementById('reqSummary').textContent =
    met === total ? `All ${total} met ✓` : `${met} of ${total} met`;
}

function animateNumber(el, to) {
  if (!el) return;
  const from = parseFloat(el.textContent) || 0;
  if (Math.abs(from - to) < 0.005) { el.textContent = to.toFixed(2); return; }
  const dur = 650, t0 = performance.now();
  function step(t) {
    const k = Math.min((t - t0) / dur, 1);
    const eased = k * (2 - k);
    el.textContent = (from + (to - from) * eased).toFixed(2);
    if (k < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function computeCumulative() {
  const card = document.getElementById('resultsCard');
  if (!enrolled.length) { card.style.display='none'; return; }
  card.style.display='block';

  const g = computeGPA(enrolled);
  // animated count-up + ring fill
  const RING_C = 2 * Math.PI * 52;       // r=52
  const ring = document.getElementById('gpaRing');
  if (g) {
    animateNumber(document.getElementById('gpaUnweighted'), g.uw);
    animateNumber(document.getElementById('gpaWeighted'), g.w);
    if (ring) ring.style.strokeDashoffset = RING_C * (1 - Math.max(0, Math.min(g.uw/4, 1)));
  } else {
    document.getElementById('gpaUnweighted').textContent = '—';
    document.getElementById('gpaWeighted').textContent = 'N/A';
    if (ring) ring.style.strokeDashoffset = RING_C;
  }
  document.getElementById('standingText').textContent = g ? standing(g.uw) : 'No grades entered yet — planning mode';

  let earned=0, planned=0;
  enrolled.forEach(e=>{
    if (e.passFail){ if(e.result==='Pass') earned+=e.credits; else if(e.result===PLANNED) planned+=e.credits; }
    else if (e.grade===PLANNED) planned+=e.credits;
    else if (GRADE_POINTS[e.grade]>0) earned+=e.credits;
  });
  const earnedPct=Math.min(earned/GRADUATION_CREDITS*100,100);
  const planPct=Math.min(planned/GRADUATION_CREDITS*100,100-earnedPct);
  document.getElementById('progressFill').style.width=earnedPct+'%';
  document.getElementById('progressPlan').style.width=planPct+'%';
  document.getElementById('creditText').textContent=`${earned} earned · ${planned} planned · of ${GRADUATION_CREDITS} required`;
  const projected=earned+planned;
  document.getElementById('progressPct').textContent =
    projected>=GRADUATION_CREDITS ? `On track: ${projected} credits projected` : `${(GRADUATION_CREDITS-projected)} credits still unplanned`;
}

// ---- Save: open the options modal ----
const saveModal = document.getElementById('saveModal');
document.getElementById('saveBtn').onclick = () => saveModal.classList.remove('hidden');
document.getElementById('saveCancel').onclick = () => saveModal.classList.add('hidden');
saveModal.onclick = (e) => { if (e.target === saveModal) saveModal.classList.add('hidden'); };

const alertModal = document.getElementById('alertModal');
function showAlert(msg) { document.getElementById('alertMsg').textContent = msg; alertModal.classList.remove('hidden'); }
document.getElementById('alertOk').onclick = () => alertModal.classList.add('hidden');
alertModal.onclick = (e) => { if (e.target === alertModal) alertModal.classList.add('hidden'); };

const confirmModal = document.getElementById('confirmModal');
document.getElementById('confirmCancel').onclick = closeConfirm;
document.getElementById('confirmOk').onclick = () => { const cb = _confirmCb; closeConfirm(); if (cb) cb(); };
confirmModal.onclick = (e) => { if (e.target === confirmModal) closeConfirm(); };

const shareModal = document.getElementById('shareModal');
document.getElementById('shareBtn').onclick = () => {
  updateShareURLNow();                              // make sure the URL reflects the latest plan
  const inp = document.getElementById('shareUrl');
  inp.value = location.href;
  shareModal.classList.remove('hidden');
  inp.focus(); inp.select();
};
document.getElementById('shareCopy').onclick = async () => {
  const url = document.getElementById('shareUrl').value;
  try { await navigator.clipboard.writeText(url); showSnack('Link copied to clipboard'); }
  catch(_){ const inp=document.getElementById('shareUrl'); inp.focus(); inp.select(); try{document.execCommand('copy');showSnack('Link copied to clipboard');}catch(e){showSnack('Press Ctrl/Cmd+C to copy');} }
};
document.getElementById('shareClose').onclick = () => shareModal.classList.add('hidden');
shareModal.onclick = (e) => { if (e.target === shareModal) shareModal.classList.add('hidden'); };

const notesModal = document.getElementById('notesModal');
document.getElementById('notesText').addEventListener('input', () => {
  const t = document.getElementById('notesText');
  autoGrow(t);
  if (notesModalYear){ yearNotes[notesModalYear] = t.value; saveState(); }
});
document.getElementById('notesClose').onclick = closeNotesModal;
notesModal.onclick = (e) => { if (e.target === notesModal) closeNotesModal(); };
document.querySelectorAll('.save-opt').forEach(b => b.onclick = () => {
  saveModal.classList.add('hidden');
  generatePDF(b.dataset.mode);   // 'both' or 'planner'
});

const GOLD = "#FEC10E", GOLD_TINT = "#FFF6D9", INK = [26,26,26], MUTE = [120,120,120];

function gradeMark(e) {
  if (e.passFail) return e.result === PLANNED ? "—" : e.result;   // "Pass" / "Fail"
  return e.grade === PLANNED ? "—" : e.grade;
}

function generatePDF(mode) {
  const includeGPA = (mode === "both");
  let fname = prompt("Enter a file name for your PDF:", includeGPA ? "ASIJ_academic_record" : "ASIJ_course_plan");
  if (fname === null) return;
  fname = fname.trim(); if (!fname) { showSnack("No file name entered"); return; }
  if (!fname.toLowerCase().endsWith(".pdf")) fname += ".pdf";

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter" }); // 612 x 792 pt
  const PW = 612;
  const L = 56, R = PW - 56;           // left / right margins
  const serif = "times";

  // ---------- Header ----------
  try { doc.addImage(LOGO_DATA, "JPEG", L, 40, 46, 46); } catch (e) {}
  doc.setFont(serif, "bold"); doc.setFontSize(19); doc.setTextColor(...INK);
  doc.text("THE AMERICAN SCHOOL IN JAPAN", PW/2, 64, { align: "center" });
  doc.setFont(serif, "normal"); doc.setFontSize(11);
  doc.text("A C A D E M I C   R E C O R D   &   F O U R - Y E A R   P L A N", PW/2, 84, { align: "center" });
  doc.setDrawColor(...INK); doc.setLineWidth(1.5); doc.line(L, 98, R, 98);
  doc.setDrawColor(GOLD);   doc.setLineWidth(1);   doc.line(L, 102, R, 102);

  // ---------- Student meta ----------
  const nameVal = (document.getElementById('studentName').value || "").trim() || "—";
  const yearVal = (document.getElementById('gradYear').value || "").trim();
  doc.setFont(serif, "normal"); doc.setFontSize(8.5); doc.setTextColor(...MUTE);
  doc.text("STUDENT", L, 126);
  doc.text("CLASS OF", R, 126, { align: "right" });
  doc.setFontSize(13); doc.setTextColor(...INK);
  doc.text(nameVal, L, 143);
  doc.text(yearVal || "—", R, 143, { align: "right" });

  // ---------- Year boxes (2x2) — wrap long names, auto-fit to ONE page ----------
  const boxW = (R - L - 16) / 2, colGap = 16, rowGap = 14;
  const HEADER_H = 26;
  const startY = 162, footerTop = 744, sumH = 58, sumGap = 16;
  const today = new Date().toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" });

  const lists = YEARS.map(yr => enrolled.filter(e => e.year === yr && !e.isFree));
  const boxesBottom = includeGPA ? footerTop - sumGap - sumH : footerTop;
  const avail = boxesBottom - startY;

  const nameWidth = boxW - 58;            // leave room for the grade mark on the right
  const measureLines = (e, fs) => { doc.setFont(serif,"normal"); doc.setFontSize(fs); return doc.splitTextToSize(e.name, nameWidth); };
  const boxHeight = (list, fs) => {
    if (!list.length) return 70;
    const lineH = fs * 1.28, gap = 7;
    let total = 0;
    list.forEach(e => { total += Math.min(measureLines(e, fs).length, 3) * lineH + gap; });
    return HEADER_H + 12 + total + 4;
  };

  // largest font (≤10.5) that keeps both rows + GPA on one page; floor 7
  let fs = 7;
  for (let f = 10.5; f >= 7; f -= 0.5) {
    const r1 = Math.max(boxHeight(lists[0], f), boxHeight(lists[1], f));
    const r2 = Math.max(boxHeight(lists[2], f), boxHeight(lists[3], f));
    if (r1 + rowGap + r2 <= avail) { fs = f; break; }
  }
  const lineH = fs * 1.28, gap = 7;

  function drawBox(bx, by, h, year, list) {
    doc.setDrawColor(220); doc.setLineWidth(1); doc.rect(bx, by, boxW, h);
    doc.setFillColor(GOLD); doc.rect(bx, by, boxW, HEADER_H, "F");
    doc.setFont(serif, "bold"); doc.setFontSize(13); doc.setTextColor(...INK);
    doc.text(year, bx + 12, by + 18);
    if (includeGPA) {
      const g = computeGPA(list);
      if (g) {
        doc.setFont(serif, "bold"); doc.setFontSize(10.5); doc.setTextColor(58, 47, 0);
        doc.text(`GPA ${g.uw.toFixed(2)}`, bx + boxW - 12, by + 18, { align: "right" });
      }
    }
    if (!list.length) {
      doc.setFont(serif, "italic"); doc.setFontSize(10); doc.setTextColor(...MUTE);
      doc.text("No classes planned", bx + 12, by + 52);
      return;
    }
    let yTop = by + HEADER_H + 12;
    list.forEach(e => {
      const lines = measureLines(e, fs).slice(0, 3);
      const n = lines.length;
      doc.setFont(serif, "normal"); doc.setFontSize(fs);
      for (let i = 0; i < n; i++) {
        doc.setTextColor(34, 34, 34);
        doc.text(lines[i], bx + 12, yTop + lineH * 0.8 + i * lineH);
      }
      const mk = includeGPA ? gradeMark(e) : "";
      if (mk) {
        if (mk === "—") doc.setTextColor(180,180,180); else doc.setTextColor(34,34,34);
        doc.text(mk, bx + boxW - 12, yTop + lineH * 0.8, { align: "right" });
      }
      yTop += n * lineH + gap;
      doc.setDrawColor(238); doc.setLineWidth(0.5);
      doc.line(bx + 12, yTop - gap * 0.6, bx + boxW - 12, yTop - gap * 0.6);
    });
  }

  const r1 = Math.max(boxHeight(lists[0], fs), boxHeight(lists[1], fs));
  const r2 = Math.max(boxHeight(lists[2], fs), boxHeight(lists[3], fs));
  drawBox(L, startY, r1, YEARS[0], lists[0]);
  drawBox(L + boxW + colGap, startY, r1, YEARS[1], lists[1]);
  const row2Y = startY + r1 + rowGap;
  drawBox(L, row2Y, r2, YEARS[2], lists[2]);
  drawBox(L + boxW + colGap, row2Y, r2, YEARS[3], lists[3]);

  let cursorY = row2Y + r2 + sumGap;

  // ---------- GPA summary (only in 'both') ----------
  if (includeGPA) {
    const g = computeGPA(enrolled);
    const boxY = cursorY, fullW = R - L;
    doc.setFillColor(GOLD_TINT); doc.setDrawColor(GOLD); doc.setLineWidth(1.5);
    doc.rect(L, boxY, fullW, sumH, "FD");
    doc.line(PW/2, boxY, PW/2, boxY + sumH);
    doc.setFont(serif, "normal"); doc.setFontSize(8.5); doc.setTextColor(122, 94, 8);
    doc.text("CUMULATIVE GPA · UNWEIGHTED", L + fullW*0.25, boxY + 22, { align: "center" });
    doc.text("WEIGHTED GPA", L + fullW*0.75, boxY + 22, { align: "center" });
    doc.setFont(serif, "bold"); doc.setFontSize(22); doc.setTextColor(...INK);
    doc.text(g ? g.uw.toFixed(2) : "N/A", L + fullW*0.25, boxY + 48, { align: "center" });
    doc.text(g ? g.w.toFixed(2) : "N/A", L + fullW*0.75, boxY + 48, { align: "center" });
  }

  // ---------- Footer ----------
  doc.setDrawColor(GOLD); doc.setLineWidth(1); doc.line(L, 750, R, 750);
  doc.setFont(serif, "normal"); doc.setFontSize(8.5); doc.setTextColor(150,150,150);
  doc.text(`Generated on ${today}`, PW/2, 763, { align: "center" });
  doc.setFontSize(6.6); doc.setTextColor(165,165,165);
  doc.text("This GPA Calculator & Planner is an independent student-created project and is not affiliated with, endorsed by, or maintained by ASIJ.", PW/2, 776, { align: "center" });

  doc.save(fname);
  showSnack(`Saved ${fname}`);
}

const themeBtn=document.getElementById('themeBtn');

// Collapsible requirements panel
let reqCollapsed = false;
document.getElementById('reqToggle').onclick = () => {
  reqCollapsed = !reqCollapsed;
  document.getElementById('reqBody').classList.toggle('hidden', reqCollapsed);
  document.getElementById('reqChevron').textContent = reqCollapsed ? 'expand_more' : 'expand_less';
};

themeBtn.onclick=()=>{const d=document.documentElement.getAttribute('data-theme')==='dark';document.documentElement.setAttribute('data-theme',d?'light':'dark');themeBtn.querySelector('span').textContent=d?'dark_mode':'light_mode';saveState();};
let st;function showSnack(m){const sb=document.getElementById('snackbar');sb.textContent=m;sb.classList.add('show');clearTimeout(st);st=setTimeout(()=>sb.classList.remove('show'),2600);}

// ---- Persistence: remember this person's plan on their device ----
const STORAGE_KEY = 'asij_gpa_planner_v1';

function stateObject(){
  return {
    enrolled,
    studentName: document.getElementById('studentName').value,
    gradYear: document.getElementById('gradYear').value,
    theme: document.documentElement.getAttribute('data-theme') || 'light',
    viewMode,
    yearNotes: { ...yearNotes },
  };
}
// ---- Compact plan codec (v2): store tiny numbers, derive the rest, then compress ----
// grade <-> index; strand-level char maps are shared with the legacy (v1) decoder below
const _G2I = {}, _I2G = {};
GRADE_ORDER.forEach((g,i)=>{ _G2I[g]=i; _I2G[i]=g; });
_G2I[PLANNED]=13; _I2G[13]=PLANNED;
const _R2I = { Pass:0, Fail:1, [PLANNED]:2 }, _I2R = { 0:'Pass', 1:'Fail', 2:PLANNED };
const _SC = { E:'E', PH:'Q', P:'P', AH:'H', A:'A', B:'B', I:'I' };   // strand level -> char
const _CS = { E:'E', Q:'PH', P:'P', H:'AH', A:'A', B:'B', I:'I' };   // char -> strand level

function encStrand(e){
  const levels = (e.strandLevels||[]).slice(0, e.strandCount).map(l => _SC[l] || '-').join('');
  const names = (e.strandNames||[]).slice(0, e.strandCount);
  return names.some(n => n && n.length) ? [e.strandCount, levels, names] : [e.strandCount, levels];
}
function decStrand(obj, s){
  obj.strandCount = s[0];
  obj.strandLevels = String(s[1]||'').split('').map(c => _CS[c] != null ? _CS[c] : '');
  while (obj.strandLevels.length < obj.strandCount) obj.strandLevels.push('');
  obj.strandNames = Array.isArray(s[2]) ? s[2].slice() : new Array(obj.strandCount).fill('');
  while (obj.strandNames.length < obj.strandCount) obj.strandNames.push('');
}
// v2 item: [yearIdx, gradeIdx, courseIdx, pf] (+ optional {c,l,s}); free = [-1, yearIdx, half]
function encItem(e){
  const y = YEARS.indexOf(e.year);
  if (e.isFree) return [-1, y, e.freeHalf ? 1 : 0];
  const g = e.passFail ? (_R2I[e.result] != null ? _R2I[e.result] : 2) : (_G2I[e.grade] != null ? _G2I[e.grade] : 13);
  const idx = ID_INDEX[e.id];
  const item = [y, g, (idx != null ? idx : e.id), e.passFail ? 1 : 0];
  const meta = ALL_COURSE_BY_ID[e.id];
  const extra = {};
  if (!meta || e.credits !== meta[2]) extra.c = e.credits;    // only store overrides
  if (!meta || e.level !== meta[3]) extra.l = e.level;
  if (e.strandCount) extra.s = encStrand(e);
  if (Object.keys(extra).length) item.push(extra);
  return item;
}
function decItem2(a){
  if (a[0] === -1) return { id:'FREE', name:'Free', credits:0, level:0, passFail:false, year:YEARS[a[1]]||'Freshman', required:false, grade:PLANNED, result:null, isFree:true, freeHalf:!!a[2] };
  const [y, g, idField, pf] = a;
  const extra = (a.length >= 5 && a[4] && typeof a[4]==='object' && !Array.isArray(a[4])) ? a[4] : {};
  const id = (typeof idField === 'number') ? (ID_LIST[idField] || String(idField)) : idField;
  const meta = ALL_COURSE_BY_ID[id];
  const obj = { id, name: meta ? meta[1] : id, credits: (extra.c != null ? extra.c : (meta ? meta[2] : 1)), level: (extra.l != null ? extra.l : (meta ? meta[3] : 1)),
    passFail: !!pf, year: YEARS[y]||'Freshman', required:false, grade:PLANNED, result:null };
  if (pf) obj.result = (_I2R[g] != null ? _I2R[g] : PLANNED); else obj.grade = (_I2G[g] != null ? _I2G[g] : PLANNED);
  if (Array.isArray(extra.s)) decStrand(obj, extra.s);
  return obj;
}
// legacy v1 item: [yearIdx, idString, gradeChar, pf, credits, level] (+ strand); free = ['F', y, half]
const _CG_V1 = {}; GRADE_ORDER.forEach((g,i)=>{ _CG_V1[String.fromCharCode(65+i)]=g; }); _CG_V1['-']=PLANNED;
const _CR_V1 = { p:'Pass', x:'Fail' };
function decItem1(a){
  if (a[0]==='F') return { id:'FREE', name:'Free', credits:0, level:0, passFail:false, year:YEARS[a[1]]||'Freshman', required:false, grade:PLANNED, result:null, isFree:true, freeHalf:!!a[2] };
  const [y, id, g, pf, cr, lv, s] = a;
  const meta = ALL_COURSE_BY_ID[id];
  const obj = { id, name: meta ? meta[1] : id, credits: (cr!=null?cr:(meta?meta[2]:1)), level: (lv!=null?lv:(meta?meta[3]:1)),
    passFail: !!pf, year: YEARS[y]||'Freshman', required:false, grade:PLANNED, result:null };
  if (pf) obj.result = _CR_V1[g] || PLANNED; else obj.grade = _CG_V1[g] || PLANNED;
  if (Array.isArray(s)) decStrand(obj, s);
  return obj;
}
function planToCompact(){
  const gy = parseInt(document.getElementById('gradYear').value, 10) || 0;
  const flags = (document.documentElement.getAttribute('data-theme')==='dark' ? 1 : 0) | (viewMode==='grid' ? 2 : 0);
  const arr = [2, document.getElementById('studentName').value || '', gy, flags, enrolled.filter(e=>!e.required).map(encItem)];
  const notes = YEARS.map((y,i)=> [i, yearNotes[y] || '']).filter(n => n[1]);   // only years that have notes
  if (notes.length) arr.push(notes);   // arr[5] = notes (array); older links kept a string here, which is ignored below
  return arr;
}
function compactToStateObject(arr){
  if (!Array.isArray(arr) || (arr[0] !== 1 && arr[0] !== 2)) return null;
  const dec = arr[0] === 2 ? decItem2 : decItem1;
  const [, name, gy, flags, items] = arr;
  let yn;
  if (Array.isArray(arr[5])){ yn = {}; arr[5].forEach(([i,t]) => { if (YEARS[i]) yn[YEARS[i]] = t; }); }
  return {
    enrolled: (items||[]).map(dec),
    studentName: typeof name==='string' ? name : '',
    gradYear: gy ? String(gy) : undefined,
    theme: (flags & 1) ? 'dark' : 'light',
    viewMode: (flags & 2) ? 'grid' : 'list',
    yearNotes: yn,
  };
}
function encodePlan(){
  const json = JSON.stringify(planToCompact());
  if (window.LZString) return 'c' + LZString.compressToEncodedURIComponent(json);
  return 'b' + encodeURIComponent(btoa(unescape(encodeURIComponent(json))));
}
function decodePlan(payload){
  if(!payload) return null;
  try{
    const scheme = payload[0], data = payload.slice(1);
    let json;
    if(scheme==='c'){ if(!window.LZString) return null; json = LZString.decompressFromEncodedURIComponent(data); }
    else if(scheme==='b'){ json = decodeURIComponent(escape(atob(decodeURIComponent(data)))); }
    else return null;
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? compactToStateObject(parsed) : parsed;   // array = compact, object = legacy link
  }catch(_){ return null; }
}
function readPlanFromHash(){
  const m = (location.hash || '').match(/[#&]p=([^&]+)/);
  return m ? decodePlan(m[1]) : null;
}
// keep the address bar in sync so the current URL always loads the current plan
function updateShareURLNow(){
  try{ history.replaceState(null, '', location.pathname + location.search + '#p=' + encodePlan()); }catch(_){}
}
let _shareTimer = null;
function updateShareURL(){ clearTimeout(_shareTimer); _shareTimer = setTimeout(updateShareURLNow, 350); }

function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(stateObject())); }catch(e){ /* storage blocked — app still works */ }
  updateShareURL();
  recordHistory();
}

// ---- Undo / redo: snapshots of the whole plan; only content changes create a step ----
let undoStack = [], redoStack = [], histFull = null, histSig = null, histTimer = null, histLock = false;
const HIST_MAX = 100;
function historySignature(){   // view/theme toggles shouldn't count as undoable edits
  return JSON.stringify([enrolled, yearNotes, document.getElementById('studentName').value, document.getElementById('gradYear').value]);
}
function recordHistory(){ if (histLock) return; clearTimeout(histTimer); histTimer = setTimeout(commitHistory, 300); }
function commitHistory(){
  clearTimeout(histTimer);
  const full = JSON.stringify(stateObject()), sig = historySignature();
  if (histFull === null){ histFull = full; histSig = sig; updateUndoRedo(); return; }
  if (sig === histSig){ histFull = full; return; }        // only view/theme changed — refresh snapshot, no step
  undoStack.push(histFull);
  if (undoStack.length > HIST_MAX) undoStack.shift();
  redoStack = [];
  histFull = full; histSig = sig;
  updateUndoRedo();
}
function applyHistory(json){
  histLock = true;
  classModalUid = null; notesModalYear = null;
  enrolled = []; yearNotes = { Freshman:'', Sophomore:'', Junior:'', Senior:'' };
  let data = {}; try { data = JSON.parse(json); } catch(_){}
  document.documentElement.setAttribute('data-theme', data.theme==='dark' ? 'dark' : 'light');
  themeBtn.querySelector('span').textContent = data.theme==='dark' ? 'light_mode' : 'dark_mode';
  applyState(data);
  render();
  histFull = JSON.stringify(stateObject()); histSig = historySignature();
  histLock = false;
  updateUndoRedo();
}
function undo(){ commitHistory(); if (!undoStack.length) return; redoStack.push(histFull); applyHistory(undoStack.pop()); showSnack('Undo'); }
function redo(){ if (!redoStack.length) return; undoStack.push(histFull); applyHistory(redoStack.pop()); showSnack('Redo'); }
function updateUndoRedo(){
  const u = document.getElementById('undoBtn'), r = document.getElementById('redoBtn');
  if (u) u.disabled = undoStack.length === 0;
  if (r) r.disabled = redoStack.length === 0;
}
function applyState(data){
  if(!data) return;
  if(Array.isArray(data.enrolled)){
    enrolled = data.enrolled.filter(e => !e.required);
    enrolled.forEach(e => { e.required = false; });
    let maxU = 0;
    enrolled.forEach(e=>{ if(!e.uid) e.uid = nextUid(); else { const n=parseInt(String(e.uid).replace(/\D/g,''),10); if(n>maxU) maxU=n; } });
    uidCounter = Math.max(uidCounter, maxU);
  }
  if(typeof data.studentName==='string') document.getElementById('studentName').value = data.studentName;
  if(typeof data.gradYear==='string') document.getElementById('gradYear').value = data.gradYear;
  if(data.viewMode==='grid' || data.viewMode==='list') viewMode = data.viewMode;
  if(data.yearNotes && typeof data.yearNotes==='object'){
    YEARS.forEach(y => { if (typeof data.yearNotes[y] === 'string') yearNotes[y] = data.yearNotes[y]; });
  }
  // migrate legacy free-period counts into ordered free entries (appended per year)
  if(data.freePeriods && typeof data.freePeriods==='object'){
    const cap = n => { n=parseInt(n,10); return (Number.isFinite(n)&&n>0)?n:0; };
    YEARS.forEach(y=>{
      const v = data.freePeriods[y];
      let full=0, half=0;
      if (typeof v === 'number') full = cap(v);
      else if (v && typeof v === 'object') { full = cap(v.full); half = cap(v.half); }
      for(let i=0;i<full;i++) enrolled.push({ uid: nextUid(), id:'FREE', name:'Free', credits:0, level:0, passFail:false, year:y, required:false, grade:PLANNED, result:null, isFree:true, freeHalf:false });
      for(let i=0;i<half;i++) enrolled.push({ uid: nextUid(), id:'FREE', name:'Free', credits:0, level:0, passFail:false, year:y, required:false, grade:PLANNED, result:null, isFree:true, freeHalf:true });
    });
  }
  if(data.theme==='dark'){
    document.documentElement.setAttribute('data-theme','dark');
    themeBtn.querySelector('span').textContent='light_mode';
  }
}
function loadState(){
  // a shared link takes priority over this device's local copy
  let data = readPlanFromHash();
  if(!data){
    try{ const raw = localStorage.getItem(STORAGE_KEY); if(raw) data = JSON.parse(raw); }catch(e){ /* ignore corrupt/blocked storage */ }
  }
  try{ applyState(data); }catch(e){ /* ignore malformed plan */ }
}

// keep graduation year numeric + persist header fields
document.getElementById('gradYear').addEventListener('change', () => {
  updateFwLabel();
  if (searchEl.value) searchEl.dispatchEvent(new Event('input'));
  saveState();
});
document.getElementById('studentName').addEventListener('input', saveState);

document.getElementById('viewToggle').addEventListener('click', () => {
  viewMode = (viewMode === 'grid') ? 'list' : 'grid';
  classModalUid = null;
  render();
});

// embed the brand logo (works offline)
document.getElementById('brandLogo').src = LOGO_DATA;

document.getElementById('undoBtn').onclick = undo;
document.getElementById('redoBtn').onclick = redo;
window.addEventListener('keydown', (e) => {
  const t = e.target;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;  // let native text undo work in fields
  if (!(e.metaKey || e.ctrlKey)) return;
  const k = (e.key || '').toLowerCase();
  if (k === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
  else if ((k === 'z' && e.shiftKey) || k === 'y') { e.preventDefault(); redo(); }
});

loadState();
updateFwLabel();
render();
commitHistory();   // set the undo baseline to the loaded plan

