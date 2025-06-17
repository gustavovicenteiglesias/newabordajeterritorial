export interface Vivienda {
  idViviendas: number;
  fecha: string;
  lastModified: number;
  longitud: number;
  latitud: number;
  sqlDeleted: number;
  motivosRechasoIdmotivosRechaso: number;
  zoonosisIdZoonosis: number;
  vectoresExistenMateriales: number;
  contactosIdContactos: number;
  condicionesSocioSanitariasIdCondicionesSocioSanitarias: number;
  nroManzana: number;
  accesoVivienda: number;
  calle: string;
  cierre: number;
  saludCultiva: number;
  saludCompos: number;
  saludSepara: number;
  nroCasa: string;
  agenteSanitario: string;
  capsIdCaps: number;
  perros: number;
  vectoresExixteRoedores: number | null;
  saludAsisteComedorl: number | null;
  barriosIdBarrios:number;
}

