

export interface CondicionesSocioSanitarias {
  id_condiciones_socio_sanitarias: number;
  nro_integrantes: number | null;
  nro_habitaciones: number | null;
  tiene_agua_corriente: 'NO' | 'NS_NC' | 'SI' | null;
  tiene_cloaca: 'NO' | 'NS_NC' | 'SI_CONECTADAS' | 'SI_SIN_CONECTAR' | null;
  tipo_viviendas_id_tipo_viviendas: number | null;
  gas_id_gas: number | null;
  recoleccion_reciduos_id_recoleccion_reciduos: number | null;
  last_modified: number | null;
  sql_deleted: number;
}
