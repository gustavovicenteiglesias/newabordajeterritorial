import api from '../api/axios';
import { VacunaCovid } from '../models/Vacunacovid';
import { ApiResponse } from '../types/ApiResponse';

const BASE_URL = '/vacunacovid';

export const getAllVacunaCovid = () => api.get<ApiResponse<VacunaCovid[]>>(BASE_URL);
export const getVacunaCovidById = (id: number) => api.get<ApiResponse<VacunaCovid>>(`${BASE_URL}/${id}`);
export const createVacunaCovid = (data: VacunaCovid) => api.post<ApiResponse<VacunaCovid>>(BASE_URL, data);
export const updateVacunaCovid = (id: number, data: VacunaCovid) => api.put<ApiResponse<VacunaCovid>>(`${BASE_URL}/${id}`, data);
export const deleteVacunaCovid = (id: number) => api.delete<ApiResponse<any>>(`${BASE_URL}/${id}`);
