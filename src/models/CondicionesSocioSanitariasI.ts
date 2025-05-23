import { Tipoviviendas } from "./Tipoviviendas";
import { RecoleccionResiduos } from "./RecoleccionResiduos";
import { Gas } from "./Gas";
export interface CondicionesSocioSanitariasI {
  idCondicionesSocioSanitarias: number;
  nroIntegrantes: number | null;
  nroHabitaciones: number | null;
  tieneAguaCorriente: 'NO' | 'NS_NC' | 'SI' | null;
  tieneCloaca: 'NO' | 'NS_NC' | 'SI_CONECTADAS' | 'SI_SIN_CONECTAR' | null;
  tipoViviendasIdTipoViviendas: Tipoviviendas
  gasIdGas: Gas;
  recoleccionReciduosIdRecoleccionReciduos: RecoleccionResiduos|null;
  last_modified: number | null;
  sql_deleted: number;
}