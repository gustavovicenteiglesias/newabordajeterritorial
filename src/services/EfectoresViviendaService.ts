import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/viviendas';

export const getEfectoresByVivienda = (idVivienda: number) =>
  api.get<ApiResponse<number[]>>(`${BASE_URL}/${idVivienda}/efectores`);

export const addEfectoresToVivienda = (idVivienda: number, efectoresIds: number[]) =>
  api.post(`${BASE_URL}/${idVivienda}/efectores`, efectoresIds);

export const deleteEfectorFromVivienda = (idVivienda: number, idEfector: number) =>
  api.delete(`${BASE_URL}/${idVivienda}/efectores/${idEfector}`);
