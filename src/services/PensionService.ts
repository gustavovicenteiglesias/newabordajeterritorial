import api from '../api/axios';
import { Pension } from '../models/Pension';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/pension';

export const getAllPension = () => api.get<ApiResponse<Pension[]>>(BASE_URL);
export const getPensionById = (id: number) => api.get<ApiResponse<Pension>>(`${BASE_URL}/${id}`);
export const createPension = (data: Pension) => api.post<ApiResponse<Pension>>(BASE_URL, data);
export const updatePension = (id: number, data: Pension) => api.put<ApiResponse<Pension>>(`${BASE_URL}/${id}`, data);
export const deletePension = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);
