import api from '../api/axios';
import { Barrios } from '../models/Barrios';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/barrios';

export const getAllBarrios = () =>
  api.get<ApiResponse<Barrios[]>>(BASE_URL);

export const getBarriosById = (id: number) =>
  api.get<ApiResponse<Barrios>>(`${BASE_URL}/${id}`);

export const createBarrios = (data: Barrios) => api.post(BASE_URL, data);
export const updateBarrios = (id: number, data: Barrios) =>
  api.put(`${BASE_URL}/${id}`, data);
export const deleteBarrios = (id: number) =>
  api.delete(`${BASE_URL}/${id}`);
