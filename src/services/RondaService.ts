import api from '../api/axios';
import { Ronda } from '../models/Ronda';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/rondas';

export const getAllRonda = () =>
  api.get<ApiResponse<Ronda[]>>(BASE_URL);

export const getRondaById = (id: number) =>
  api.get<ApiResponse<Ronda>>(`${BASE_URL}/${id}`);

export const createRonda = (data: Ronda) => api.post(BASE_URL, data);
export const updateRonda = (id: number, data: Ronda) =>
  api.put(`${BASE_URL}/${id}`, data);
export const deleteRonda = (id: number) =>
  api.delete(`${BASE_URL}/${id}`);
