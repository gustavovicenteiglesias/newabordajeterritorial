import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';



const BASE_URL = '/viviendascausas';

export const getCausasByVivienda = (idVivienda: number) =>
  api.get<ApiResponse<ViviendasHasCausas[]>>(`${BASE_URL}/${idVivienda}`);

export const saveCausasByVivienda = (idVivienda: number, causasIds: number[]) =>
  api.post(`${BASE_URL}/${idVivienda}`, causasIds);

export const deleteCausa = (idVivienda: number, idCausa: number) =>
  api.delete(`${BASE_URL}/${idVivienda}/${idCausa}`);
