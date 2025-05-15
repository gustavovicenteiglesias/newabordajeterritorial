import api from '../api/axios';
import { EsquemaVacunacion } from '../models/Esquemavacunacion';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/esquemavacunacion';

export const getAllEsquemaVacunacion = () => api.get<ApiResponse<EsquemaVacunacion[]>>(BASE_URL);
export const getEsquemaVacunacionById = (id: number) => api.get<ApiResponse<EsquemaVacunacion>>(`${BASE_URL}/${id}`);
export const createEsquemaVacunacion = (data: EsquemaVacunacion) => api.post<ApiResponse<EsquemaVacunacion>>(BASE_URL, data);
export const updateEsquemaVacunacion = (id: number, data: EsquemaVacunacion) => api.put<ApiResponse<EsquemaVacunacion>>(`${BASE_URL}/${id}`, data);
export const deleteEsquemaVacunacion = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);
