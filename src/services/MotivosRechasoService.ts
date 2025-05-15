import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';
import { MotivosRechaso } from '../models/MotivosRechaso';

const BASE_URL = '/motivosrechaso';

export const getAllMotivos = () =>
  api.get<ApiResponse<MotivosRechaso[]>>(`${BASE_URL}`);

export const getMotivoById = (id: number) =>
  api.get<ApiResponse<MotivosRechaso>>(`${BASE_URL}/${id}`);

export const createMotivo = (data: MotivosRechaso) =>
  api.post<ApiResponse<MotivosRechaso>>(BASE_URL, data);

export const updateMotivo = (id: number, data: MotivosRechaso) =>
  api.put<ApiResponse<MotivosRechaso>>(`${BASE_URL}/${id}`, data);

export const deleteMotivo = (id: number) =>
  api.delete<ApiResponse<null>>(`${BASE_URL}/${id}`);
