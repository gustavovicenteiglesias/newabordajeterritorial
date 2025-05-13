import api from '../api/axios';
import { Zoonosis } from '../models/Zoonosis';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/zoonosis';

export const getAllZoonosis = () =>
  api.get<ApiResponse<Zoonosis[]>>(BASE_URL);

export const getZoonosisById = (id: number) =>
  api.get<ApiResponse<Zoonosis>>(`${BASE_URL}/${id}`);

export const createZoonosis = (data: Zoonosis) => api.post(BASE_URL, data);
export const updateZoonosis = (id: number, data: Zoonosis) =>
  api.put(`${BASE_URL}/${id}`, data);
export const deleteZoonosis = (id: number) =>
  api.delete(`${BASE_URL}/${id}`);
