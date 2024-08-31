import { authApi, api, apiNode } from './axios'

export const reqGetUnitsByEcommerce = async () => api.get('/business-unit/get-all-ecommerce');