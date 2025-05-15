import api from '../api/axios';
import { Escolaridad } from '../models/Escolaridad';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/escolaridad';

export const getAllEscolaridad = () => api.get<ApiResponse<Escolaridad[]>>(BASE_URL);
export const getEscolaridadById = (id: number) => api.get<ApiResponse<Escolaridad>>(`${BASE_URL}/${id}`);
export const createEscolaridad = (data: Escolaridad) => api.post<ApiResponse<Escolaridad>>(BASE_URL, data);
export const updateEscolaridad = (id: number, data: Escolaridad) => api.put<ApiResponse<Escolaridad>>(`${BASE_URL}/${id}`, data);
export const deleteEscolaridad = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);
