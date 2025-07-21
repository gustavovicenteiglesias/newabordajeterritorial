import api from '../api/axios';
import { ApiResponse } from '../types/ApiResponse';
import { IntegrantesHasMac } from '../models/IntegrantesHasMac';


const BASE_URL = '/integranteshasmac';

export const getAllIntegrantesHasMac = () =>
  api.get<ApiResponse<IntegrantesHasMac[]>>(BASE_URL);

export const getAllIntegrantesHasMacByIntegrante = (integranteId: number) =>
  api.get<ApiResponse<IntegrantesHasMac[]>>(`${BASE_URL}/${integranteId}`);

export const getIntegranteHasMacById = (integranteId: number, macId: number) =>
  api.get<ApiResponse<IntegrantesHasMac>>(`${BASE_URL}/${integranteId}/${macId}`);

export const createIntegranteHasMac = (data: IntegrantesHasMac) =>
  api.post<ApiResponse<IntegrantesHasMac>>(BASE_URL, data);

export const updateIntegranteHasMac = (
  integranteId: number,
  macId: number,
  data: IntegrantesHasMac
) =>
  api.put<ApiResponse<IntegrantesHasMac>>(`${BASE_URL}/${integranteId}/${macId}`, data);

export const deleteIntegranteHasMac = (integranteId: number, macId: number) =>
  api.delete<ApiResponse<any>>(`${BASE_URL}/${integranteId}/${macId}`);
