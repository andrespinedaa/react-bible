/* GOSPELS */
type evangelios = {
  Mt: "Mateo";
  Mr: "Marcos";
  Lc: "Lucas";
  Jn: "Juan";
};
/* PAULINE EPISTLES */
type epistolasPablo = {
  Ro: "Romanos";
  "1Co": "1 Corintios";
  "2Co": "2 Corintios";
  Gl: "Gálatas";
  Ef: "Efesios";
  Flp: "Filipenses";
  Col: "Colosenses";
  "1Ts": "1 Tesalonicenses";
  "2Ts": "2 Tesalonicenses";
  "1Ti": "1 Timoteo";
  "2Ti": "2 Timoteo";
  Tit: "Tito";
  Flm: "Filemon";
};
/* PETRINE EPISTLES */
type epistolasPedro = {
  "1P": "1 Pedro";
  "2P": "2 Pedro";
};
/* JOHANNINE EPISTLES */
type epistolasJuan = {
  "1Jn": "1 Juan";
  "2Jn": "2 Juan";
  "3Jn": "3 Juan";
  Ap: "Apocalipsis";
};
/* HEBREWS */
type hebreos = { Heb: "Hebreos" };
/* ACTS */
type hechos = { Hch: "Hechos" };
/* JUDE */
type judas = { Jud: "Judas" };
/* JAMES */
type santiago = { Stg: "Santiago" };

export type nuevoTestamento = evangelios & hechos & epistolasPablo & epistolasPedro & epistolasJuan & hebreos & judas & santiago; 
