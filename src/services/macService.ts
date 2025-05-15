import api from '../api/axios';
import { Mac } from '../models/Mac';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/mac';

export const getAllMac = () => api.get<ApiResponse<Mac[]>>(BASE_URL);
export const getMacById = (id: number) => api.get<ApiResponse<Mac>>(`${BASE_URL}/${id}`);
export const createMac = (data: Mac) => api.post<ApiResponse<Mac>>(BASE_URL, data);
export const updateMac = (id: number, data: Mac) => api.put<ApiResponse<Mac>>(`${BASE_URL}/${id}`, data);
export const deleteMac = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);
