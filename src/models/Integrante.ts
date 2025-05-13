export interface Integrante {
  id: number;
  nombre: string;
  apellido: string;
  genero: string;
  edad: number;
  fechanacimiento: string; // ISO date (yyyy-MM-dd)
  covid: number;
  fumador: number;
  controlSalud: number;
  pap: string;
  mamografia: string;
  embarazo: number;
  fpp: string; // ISO date
  edadGestacional: number;
  controlesPrenatales: number;
  embarazoRiesgo: number;
  dni: number;
  latitud: number;
  longitud: number;
  otroproblema: string;
  idMac: number;
  idCobertura: number;
  escolaridad: number;
  idPension: number;
  idVacunacion: number;
  idEmbarazo: number;
  idCovid: number;
  idViviendas: number;
  lastModified: number;
  sqlDeleted: number;
}
