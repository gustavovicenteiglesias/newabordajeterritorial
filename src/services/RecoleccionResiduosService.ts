import api from '../api/axios';
import { RecoleccionResiduos } from '../models/RecoleccionResiduos';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/recoleccionreciduos';

export const getAllRecoleccionResiduos = () => api.get<ApiResponse<RecoleccionResiduos[]>>(BASE_URL);
export const getRecoleccionResiduosById = (id: number) => api.get<ApiResponse<RecoleccionResiduos>>(`${BASE_URL}/${id}`);
export const createRecoleccionResiduos = (data: RecoleccionResiduos) => api.post<ApiResponse<RecoleccionResiduos>>(BASE_URL, data);
export const updateRecoleccionResiduos = (id: number, data: RecoleccionResiduos) => api.put<ApiResponse<RecoleccionResiduos>>(`${BASE_URL}/${id}`, data);
export const deleteRecoleccionResiduos = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);