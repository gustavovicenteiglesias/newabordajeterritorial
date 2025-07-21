import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';
import { IntegrantesHAsEcnt } from '../models/IntegrantesHasEcnt';

const BASE_URL="/integranteshasecnt"

export const getByIntegranteAndEcnt=(idIntegrante:number,idEcnt:number)=>api.get<ApiResponse<IntegrantesHAsEcnt>>(`${BASE_URL}/${idIntegrante}/${idEcnt}`);
export const getByIntegrante=(idIntegrante:number)=>api.get<ApiResponse<IntegrantesHAsEcnt[]>>(`${BASE_URL}/${idIntegrante}`)
export const createIntegrantesHasEcnt=(idIntegrante:number)=>api.post<ApiResponse<IntegrantesHAsEcnt>>(`${BASE_URL}/${idIntegrante}`)
export const saveProblemasPorEcnt = (
  integranteId: number,
  ecntIds: number[]
) =>
  api.post<ApiResponse<any>>(`${BASE_URL}/${integranteId}`, ecntIds);