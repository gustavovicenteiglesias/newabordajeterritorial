export function buildViviendaPayload(values: any): any {
  return {
    idViviendas: values.idViviendas,
    nroManzana: values.nroManzana,
    nroCasa: values.nroCasa,
    calle: values.calle,
    latitud: values.latitud,
    longitud: values.longitud,
    accesoVivienda: values.accesoVivienda,
    perros: values.perros,
    cierre: values.cierre,
    agenteSanitario: values.agenteSanitario,
    fecha: values.fecha,
    saludAsisteComedor: values.saludAsisteComedor,
    saludCultiva: values.saludCultiva,
    saludCompos: values.saludCompos,
    saludSepara: values.saludSepara,
    vectoresExisteVectores: values.vectoresExisteVectores,
    vectoresExistenMateriales: values.vectoresExistenMateriales,
    lastModified: Math.floor(Date.now() / 1000),
    sqlDeleted: 0,

    // Relaciones por ID
    contactosIdContactos: values.contactosIdContactos,
    condicionesSocioSanitariasIdCondicionesSocioSanitarias: values.condicionesSocioSanitariasIdCondicionesSocioSanitarias,
    capsIdCaps: values.capsIdCaps,
    barriosIdBarrios: values.barriosIdBarrios,
    motivosRechasoIdmotivosRechaso: values.motivosRechasoIdmotivosRechaso,
    zoonosisIdZoonosis: values.zoonosisIdZoonosis
  };
}
