import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/viviendas';

export const getCausasByVivienda = (idVivienda: number) =>
  api.get<ApiResponse<number[]>>(`${BASE_URL}/${idVivienda}/causas`);

export const addCausasToVivienda = (idVivienda: number, causasIds: number[]) =>
  api.post(`${BASE_URL}/${idVivienda}/causas`, causasIds);

export const deleteCausaFromVivienda = (idVivienda: number, idCausa: number) =>
  api.delete(`${BASE_URL}/${idVivienda}/causas/${idCausa}`);
