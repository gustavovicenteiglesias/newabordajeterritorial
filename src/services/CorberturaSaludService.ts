import api from '../api/axios';
import { Coberturasalud } from '../models/Coberturasalud';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/coberturasalud';

export const getAllCoberturasalud = () => api.get<ApiResponse<Coberturasalud[]>>(BASE_URL);
export const getCoberturasaludById = (id: number) => api.get<ApiResponse<Coberturasalud>>(`${BASE_URL}/${id}`);
export const createCoberturasalud = (data: Coberturasalud) => api.post<ApiResponse<Coberturasalud>>(BASE_URL, data);
export const updateCoberturasalud = (id: number, data: Coberturasalud) => api.put<ApiResponse<Coberturasalud>>(`${BASE_URL}/${id}`, data);
export const deleteCoberturasalud = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);