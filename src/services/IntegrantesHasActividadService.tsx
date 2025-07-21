import api from '../api/axios';
import { IntegrantesHasActividad } from '../models/IntegrantesHasActividad';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/integranteshasactividad';

export const getAllIntegrantesHasActividad = () =>
  api.get<ApiResponse<IntegrantesHasActividad[]>>(BASE_URL);

export const getActividadByIntegrante = (idIntegrante: number) =>
  api.get<ApiResponse<IntegrantesHasActividad[]>>(`${BASE_URL}/${idIntegrante}`);

export const getIntegrantesHasActividadById = (integrantesId: number, actividadId: number) =>
  api.get<ApiResponse<IntegrantesHasActividad>>(`${BASE_URL}/${integrantesId}/${actividadId}`);

export const createIntegrantesHasActividad = (data: IntegrantesHasActividad) =>
  api.post<ApiResponse<IntegrantesHasActividad>>(BASE_URL, data);

export const updateIntegrantesHasActividad = (
  integrantesId: number,
  actividadId: number,
  data: IntegrantesHasActividad 
) =>
  api.put<ApiResponse<IntegrantesHasActividad>>(
    `${BASE_URL}/${integrantesId}/${actividadId}`,
    data
  );

export const deleteIntegrantesHasActividad = (integrantesId: number, actividadId: number) =>
  api.delete<ApiResponse<any>>(`${BASE_URL}/${integrantesId}/${actividadId}`);

export const saveProblemasPorActividad = (
  integranteId: number,
  actividadIds: number[]
) =>
  api.post<ApiResponse<any>>(`${BASE_URL}/${integranteId}`, actividadIds);