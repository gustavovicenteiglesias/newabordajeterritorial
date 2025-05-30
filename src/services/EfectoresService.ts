import api from "../api/axios";
import { ApiResponse } from "../types/ApiResponse";
import { Efector } from "../models/Efector";

const BASE_URL = "/efectores";

export const getAllEfectores = () =>
  api.get<ApiResponse<Efector[]>>(BASE_URL);

export const getEfectorById = (id: number) =>
  api.get<ApiResponse<Efector>>(`${BASE_URL}/${id}`);

export const createEfector = (data: Efector) =>
  api.post<ApiResponse<Efector>>(BASE_URL, data);

export const updateEfector = (id: number, data: Efector) =>
  api.put<ApiResponse<Efector>>(`${BASE_URL}/${id}`, data);

export const deleteEfector = (id: number) =>
  api.delete<ApiResponse<null>>(`${BASE_URL}/${id}`);
