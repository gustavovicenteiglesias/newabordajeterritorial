import api from '../api/axios';
import { Actividad } from '../models/Actividad';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/actividad';

export const getAllActividad = () =>
  api.get<ApiResponse<Actividad[]>>(BASE_URL);

export const getActividadById = (id: number) =>
  api.get<ApiResponse<Actividad>>(`${BASE_URL}/${id}`);

export const createActividad = (data: Actividad) => api.post(BASE_URL, data);
export const updateActividad = (id: number, data: Actividad) =>
  api.put(`${BASE_URL}/${id}`, data);
export const deleteActividad = (id: number) =>
  api.delete(`${BASE_URL}/${id}`);
