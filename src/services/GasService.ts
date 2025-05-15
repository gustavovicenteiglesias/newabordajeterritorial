import api from '../api/axios';
import { Gas } from '../models/Gas';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/gas';

export const getAllGas = () => api.get<ApiResponse<Gas[]>>(BASE_URL);
export const getGasById = (id: number) => api.get<ApiResponse<Gas>>(`${BASE_URL}/${id}`);
export const createGas = (data: Gas) => api.post<ApiResponse<Gas>>(BASE_URL, data);
export const updateGas = (id: number, data: Gas) => api.put<ApiResponse<Gas>>(`${BASE_URL}/${id}`, data);
export const deleteGas = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);