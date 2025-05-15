import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';
import { CondicionesSocioSanitarias } from '../models/CondicionesSocioSanitarias';

const BASE_URL = '/condicionessociosanitarias';

export const getAllCondiciones = () =>
  api.get<ApiResponse<CondicionesSocioSanitarias[]>>(`${BASE_URL}`);

export const getCondicionById = (id: number) =>
  api.get<ApiResponse<CondicionesSocioSanitarias>>(`${BASE_URL}/${id}`);

export const createCondicion = (data: CondicionesSocioSanitarias) =>
  api.post<ApiResponse<CondicionesSocioSanitarias>>(BASE_URL, data);

export const updateCondicion = (id: number, data: CondicionesSocioSanitarias) =>
  api.put<ApiResponse<CondicionesSocioSanitarias>>(`${BASE_URL}/${id}`, data);

export const deleteCondicion = (id: number) =>
  api.delete<ApiResponse<null>>(`${BASE_URL}/${id}`);
