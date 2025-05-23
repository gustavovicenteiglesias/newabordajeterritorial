

export interface CondicionesSocioSanitarias {
  idCondicionesSocioSanitarias: number;
  nroIntegrantes: number | null;
  nroHabitaciones: number | null;
  tieneAguaCorriente: 'NO' | 'NS_NC' | 'SI' | null;
  tieneCloaca: 'NO' | 'NS_NC' | 'SI_CONECTADAS' | 'SI_SIN_CONECTAR' | null;
  tipoViviendasIdTipoViviendas: number | null;
  gasIdGas: number | null;
  recoleccionReciduosIdRecoleccionReciduos: number | null;
  lastModified: number ;
  sqlDeleted: number;
}
