import api from '../api/axios';
import { Tipoviviendas } from '../models/Tipoviviendas';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/tipoviviendas';

export const getAllTipoviviendas = () =>
  api.get<ApiResponse<Tipoviviendas[]>>(BASE_URL);

export const getTipoviviendasById = (id: number) =>
  api.get<ApiResponse<Tipoviviendas>>(`${BASE_URL}/${id}`);

export const createTipoviviendas = (data: Tipoviviendas) => api.post(BASE_URL, data);
export const updateTipoviviendas = (id: number, data: Tipoviviendas) =>
  api.put(`${BASE_URL}/${id}`, data);
export const deleteTipoviviendas = (id: number) =>
  api.delete(`${BASE_URL}/${id}`);
