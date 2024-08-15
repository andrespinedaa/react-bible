/* PENTATEUCO */
type pentateuco = {
  Gn: "Génesis";
  Ex: "Éxodo";
  Lv: "Levítico";
  Nm: "Números";
  Dt: "Deuteronomio";
};
/* LIBROS HISTORICOS */
type librosHistoricos = {
  Jos: "Josué";
  Jue: "Jueces";
  Rt: "Rut";
  "1S": "1 Samuel";
  "2S": "2 Samuel";
  "1R": "1 Reyes";
  "2R": "2 Reyes";
  "1Cr": "1 Crónicas";
  "2Cr": "2 Crónicas";
  Esd: "Esdras";
  Neh: "Nehemías";
  Est: "Ester";
};
/* POETICOS Y SAPIENCIALES */
type poeticosSapienciales = {
  Job: "Job";
  Sal: "Salmos";
  Pr: "Proverbios";
  Ec: "Eclesiastés";
  Ct: "Cantares";
};
/* PROPHETS */
    /* PROFETAS MAYORES */
type profetasMayores = {
  Is: "Isaías";
  Da: "Daniel";
  Ez: "Ezequiel";
  Jer: "Jeremías";
};
    /* PROFETAS MENORES */
type profetasMenores = {
  La: "Lamentaciones";
  Os: "Oseas";
  Jl: "Joel";
  Am: "Amós";
  Ab: "Abdías";
  Jon: "Jonás";
  Mi: "Miqueas";
  Na: "Nahúm";
  Hab: "Habacuc";
  Sof: "Sofonías";
  Hag: "Hageo";
  Zac: "Zacarías";
  Mal: "Malaquías";
};
type profeticos = profetasMayores & profetasMenores;

export type antiguoTestamento = pentateuco &
  librosHistoricos &
  poeticosSapienciales &
  profeticos;
