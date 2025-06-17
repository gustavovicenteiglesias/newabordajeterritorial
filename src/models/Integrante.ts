export interface Integrante {
  idIntegrantes: number;
  apellido: string | null;
  nombre: string | null;
  genero: string | null;
  edad: number;
  fechanacimiento: string; // formato ISO yyyy-MM-dd
  tuvoCovid: number | null;
  fumador: number | null;
  controlSalud: number | null;
  pap: string | null;
  mamografia: string | null;
  embarazo: number | null;
  fpp: string | null; // formato ISO yyyy-MM-dd
  edadGestacional: number | null;
  controlesPrenatales: number | null;
  embarazoRiesgo: number | null;
  dni: number | null;
  latitud: number | null;
  longitud: number | null;
  otroproblema: string | null;
  macIdMac: number | null;
  coberturaSaludIdCoberturaSalud: number | null;
  escolaridadIdEscolaridad: number | null;
  pensionIdPension: number | null;
  esquemaVacunacionIdEsquemaVacunacion: number | null;
  finalizacionEmbarazoIdFinalizacionEmbarazo: number | null;
  vacunaCovidIdVacunaCovid: number | null;
  viviendasIdViviendas: number | null;
  lastModified: number; // timestamp (puede ser `string` si llega en ISO)
  sqlDeleted: number;
}

