import api from "../api/axios";
import { ApiResponse } from "../types/ApiResponse";
import { CausaSeleccionEfector } from "../models/CausaSeleccionEfector";

const BASE_URL = "/causas";

export const getAllCausas = () =>
  api.get<ApiResponse<CausaSeleccionEfector[]>>(BASE_URL);

export const getCausaById = (id: number) =>
  api.get<ApiResponse<CausaSeleccionEfector>>(`${BASE_URL}/${id}`);

export const createCausa = (data: CausaSeleccionEfector) =>
  api.post<ApiResponse<CausaSeleccionEfector>>(BASE_URL, data);

export const updateCausa = (id: number, data: CausaSeleccionEfector) =>
  api.put<ApiResponse<CausaSeleccionEfector>>(`${BASE_URL}/${id}`, data);

export const deleteCausa = (id: number) =>
  api.delete<ApiResponse<null>>(`${BASE_URL}/${id}`);
