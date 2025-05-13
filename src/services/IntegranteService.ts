import api from '../api/axios';
import { Integrante } from '../models/Integrante';
import { ApiResponse } from '../types/ApiResponse';

export const getAllIntegrantes = () =>
  api.get<ApiResponse<Integrante[]>>('/integrantes/getall');

export const getIntegrantesByViviendaId = (id: number) =>
  api.get<ApiResponse<Integrante[]>>(`/integrantes/findbyIntegrantesbyid/${id}`);

export const createIntegrante = (data: Integrante) =>
  api.post<ApiResponse<Integrante>>('/integrantes', data);

export const updateIntegrante = (id: number, data: Integrante) =>
  api.put<ApiResponse<Integrante>>(`/integrantes/${id}`, data);

export const deleteIntegrante = (id: number) =>
  api.delete<ApiResponse<any>>(`/integrantes/${id}`);
