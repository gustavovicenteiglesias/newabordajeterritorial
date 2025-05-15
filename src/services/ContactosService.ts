import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';
import { Contactos } from '../models/Contactos';

const BASE_URL = '/contactos';

export const getAllContactos = () =>
  api.get<ApiResponse<Contactos[]>>(`${BASE_URL}`);

export const getContactoById = (id: number) =>
  api.get<ApiResponse<Contactos>>(`${BASE_URL}/${id}`);

export const createContacto = (data: Contactos) =>
  api.post<ApiResponse<Contactos>>(BASE_URL, data);

export const updateContacto = (id: number, data: Contactos) =>
  api.put<ApiResponse<Contactos>>(`${BASE_URL}/${id}`, data);

export const deleteContacto = (id: number) =>
  api.delete<ApiResponse<null>>(`${BASE_URL}/${id}`);
