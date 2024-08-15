/* PENTATEUCO */
type pentateuch = {
  Gn: "Genesis";
  Ex: "Exodus";
  Lv: "Leviticus";
  Nm: "Numbers";
  Dt: "Deuteronomy";
};
/* HISTORICOS */
type historicalBooks = {
  Jos: "Joshua";
  Jue: "Judges";
  Rt: "Ruth";
  "1S": "1 Samuel";
  "2S": "2 Samuel";
  "1R": "1 Kings";
  "2R": "2 Kings";
  "1Cr": "1 Chronicles";
  "2Cr": "2 Chronicles";
  Esd: "Ezra";
  Neh: "Nehemiah";
  Est: "Esther";
};
/* POETICOS Y DE SABIDURIA */
type poeticAndWisdomBooks = {
  Job: "Job";
  Sal: "Psalms";
  Pr: "Proverbs";
  Ec: "Ecclesiastes";
  Ct: "Song of Solomon";
};
/* PROFETICOS */
    /* MAJOR PROPHETS */
type majorProphets = {
  Is: "Isaiah";
  Da: "Daniel";
  Ez: "Ezekiel";
  Jer: "Jeremiah";
};
    /* MINOR PROPHETS */
type minorProphets = {
  La: "Lamentations";
  Os: "Hosea";
  Jl: "Joel";
  Am: "Amos";
  Ab: "Obadiah";
  Jon: "Jonah";
  Mi: "Micah";
  Na: "Nahum";
  Hab: "Habakkuk";
  Sof: "Zephaniah";
  Hag: "Haggai";
  Zac: "Zechariah";
  Mal: "Malachi";
};
type profheticBooks = majorProphets & minorProphets;

export type oldTestament = pentateuch &
  historicalBooks &
  poeticAndWisdomBooks &
  profheticBooks;
