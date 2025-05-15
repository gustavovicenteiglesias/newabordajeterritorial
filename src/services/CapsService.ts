import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';
import { Caps } from '../models/Caps';

const BASE_URL = '/caps';

export const getAllCaps = () =>
  api.get<ApiResponse<Caps[]>>(`${BASE_URL}`);

export const getCapsById = (id: number) =>
  api.get<ApiResponse<Caps>>(`${BASE_URL}/${id}`);

export const createCaps = (data: Caps) =>
  api.post<ApiResponse<Caps>>(BASE_URL, data);

export const updateCaps = (id: number, data: Caps) =>
  api.put<ApiResponse<Caps>>(`${BASE_URL}/${id}`, data);

export const deleteCaps = (id: number) =>
  api.delete<ApiResponse<null>>(`${BASE_URL}/${id}`);
