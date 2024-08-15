/* GOSPELS */
type gospels = {
  Mt: "Matthew";
  Mr: "Mark";
  Lc: "Luke";
  Jn: "John";
};
/* ACTS */
type acts = { Hch: "Acts" };
/* PAULINE EPISTLES */
type paulineEpistles = {
  Ro: "Romans";
  "1Co": "1 Corinthians";
  "2Co": "2 Corinthians";
  Gl: "Galatinas";
  Ef: "Ephesians";
  Flp: "Philippians";
  Col: "Colossians";
  "1Ts": "1 Thessalonians";
  "2Ts": "2 Thessalonians";
  "1Ti": "1 Timothy";
  "2Ti": "2 Timothy";
  Tit: "Titus";
  Flm: "Philemon";
};
/* PETRINE EPISTLES */
type petrineEpistles = {
  "1P": "1 Peter";
  "2P": "2 Peter";
};
/* JOHANNINE EPISTLES */
type johannineEpistles = {
  "1Jn": "1 John";
  "2Jn": "2 John";
  "3Jn": "3 John";
  Ap: "Revelation";
};
/* HEBREWS */
type hebrews = { Heb: "Hebrews" };
/* JAMES */
type james = { Stg: "James" };
/* JUDE */
type jude = { Jud: "Jude" };
export type newTestament = gospels &
  acts &
  paulineEpistles &
  petrineEpistles &
  johannineEpistles &
  hebrews &
  james &
  jude;
