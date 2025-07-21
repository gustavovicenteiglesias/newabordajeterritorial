import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';
import { IntegrantesHasProblemas } from '../models/IntegrantesHasProlemas';

const BASE_URL = '/integranteshasproblemas';

export const getAllIntegrantesHasProblemas = () =>
  api.get<ApiResponse<IntegrantesHasProblemas[]>>(BASE_URL);

export const getProblemasByIntegrante = (integranteId: number) =>
  api.get<ApiResponse<IntegrantesHasProblemas[]>>(`${BASE_URL}/${integranteId}`);

export const getProblemaPorIntegrante = (integranteId: number, problemaId: number) =>
  api.get<ApiResponse<IntegrantesHasProblemas>>(`${BASE_URL}/${integranteId}/${problemaId}`);

/**
 * Guarda múltiples relaciones entre un integrante y una lista de problemas.
 * En el backend, se espera una lista de IDs como body del request.
 */
export const saveProblemasPorIntegrante = (
  integranteId: number,
  problemasIds: number[]
) =>
  api.post<ApiResponse<any>>(`${BASE_URL}/${integranteId}`, problemasIds);

export const updateProblemaPorIntegrante = (
  integranteId: number,
  problemaId: number,
  data: IntegrantesHasProblemas
) =>
  api.put<ApiResponse<IntegrantesHasProblemas>>(
    `${BASE_URL}/${integranteId}/${problemaId}`,
    data
  );

export const deleteProblemaPorIntegrante = (
  integranteId: number,
  problemaId: number
) =>
  api.delete<ApiResponse<any>>(`${BASE_URL}/${integranteId}/${problemaId}`);
