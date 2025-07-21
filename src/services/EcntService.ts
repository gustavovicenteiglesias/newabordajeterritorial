import api from '../api/axios';
import { Ecnt } from '../models/Ecnt';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/ecnt';

export const getAllEcnt = () => api.get<ApiResponse<Ecnt[]>>(BASE_URL);

export const getEcntById = (id: number) =>
  api.get<ApiResponse<Ecnt>>(`${BASE_URL}/${id}`);

export const createEcnt = (data: Ecnt) =>
  api.post<ApiResponse<Ecnt>>(BASE_URL, data);

export const updateEcnt = (id: number, data: Ecnt) =>
  api.put<ApiResponse<Ecnt>>(`${BASE_URL}/${id}`, data);

export const deleteEcnt = (id: number) =>
  api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);
