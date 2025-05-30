import api from '../api/axios';
import { ViviendasHasEfectores } from '../models/ViviendasHasEfectores';
import { ApiResponse } from '../types/ApiResponse';



const BASE_URL = '/viviendasefectores';

export const getEfectoresByVivienda = (idVivienda: number) =>
  api.get<ApiResponse<ViviendasHasEfectores[]>>(`${BASE_URL}/${idVivienda}`);

export const saveEfectoresByVivienda = (idVivienda: number, efectoresIds: number[]) =>
  api.post(`${BASE_URL}/${idVivienda}`, efectoresIds);

export const deleteEfector = (idVivienda: number, idEfector: number) =>
  api.delete(`${BASE_URL}/${idVivienda}/${idEfector}`);

export const saveEfectoresSeleccionados = (idVivienda: number, ids: number[]) =>
  api.post(`/viviendasefectores/${idVivienda}`, ids);
