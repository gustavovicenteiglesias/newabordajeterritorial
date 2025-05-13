import api from '../api/axios';
import { Vivienda } from '../models/Vivienda';
import { ApiResponse } from '../types/ApiResponse';

interface PagedResponse<T> {
  data: T[];
  totalPages: number;
  totalElements: number;
  currentPage: number;
  message: string;
  success: boolean;
}

const BASE_URL = '/viviendas';

export const getAllViviendas = () =>
  api.get<ApiResponse<Vivienda[]>>(`${BASE_URL}/getall`);

export const getViviendaById = (id: number) =>
  api.get<ApiResponse<Vivienda>>(`${BASE_URL}/findbyid/${id}`);

export const getPagedViviendas = (page: number, size: number) =>
  api.get<PagedResponse<Vivienda>>(`${BASE_URL}/paged?page=${page}&size=${size}`);

export const createVivienda = (data: Vivienda) => api.post(BASE_URL, data);
export const updateVivienda = (id: number, data: Vivienda) =>
  api.put(`${BASE_URL}/${id}`, data);
export const deleteVivienda = (id: number) =>
  api.delete(`${BASE_URL}/${id}`);