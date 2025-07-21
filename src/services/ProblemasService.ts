import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';
import { Problemas } from '../models/Problemas';

const BASE_URL = '/problemas';

export const getAllProblemas = () =>
  api.get<ApiResponse<Problemas[]>>(BASE_URL);

export const getProblemaById = (id: number) =>
  api.get<ApiResponse<Problemas>>(`${BASE_URL}/${id}`);

export const createProblema = (data: Problemas) =>
  api.post<ApiResponse<Problemas>>(BASE_URL, data);

export const updateProblema = (id: number, data: Problemas) =>
  api.put<ApiResponse<Problemas>>(`${BASE_URL}/${id}`, data);

export const deleteProblema = (id: number) =>
  api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);