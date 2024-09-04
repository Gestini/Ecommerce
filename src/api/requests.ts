import { authApi, api, apiNode, NewsletterApi } from './axios'

export const reqGetUnitsByEcommerce = async () => api.get('/business-unit/get-all-ecommerce');

export const reqPostUserWithelist = async (data: any) => {
    console.log(data)
    try {
      const response = await NewsletterApi.post('/newsletter/subscribe', data, {
        headers: {
            'Content-Type': 'application/json',
          }
      });
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      throw error; // Lanza el error para que pueda ser manejado por el llamador
    }
  };