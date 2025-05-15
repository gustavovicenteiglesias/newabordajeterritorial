import api from '../api/axios';
import { FinalizacionEmbarazo } from '../models/Finalizacionembarazo';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/finalizacionembarazo';

export const getAllFinalizacionEmbarazo = () => api.get<ApiResponse<FinalizacionEmbarazo[]>>(BASE_URL);
export const getFinalizacionEmbarazoById = (id: number) => api.get<ApiResponse<FinalizacionEmbarazo>>(`${BASE_URL}/${id}`);
export const createFinalizacionEmbarazo = (data: FinalizacionEmbarazo) => api.post<ApiResponse<FinalizacionEmbarazo>>(BASE_URL, data);
export const updateFinalizacionEmbarazo = (id: number, data: FinalizacionEmbarazo) => api.put<ApiResponse<FinalizacionEmbarazo>>(`${BASE_URL}/${id}`, data);
export const deleteFinalizacionEmbarazo = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);
