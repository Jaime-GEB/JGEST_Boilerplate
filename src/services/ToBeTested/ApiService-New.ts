import type { ErrorResponse } from '../../providers/NotificationProvider/context/NotificationContext';
import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios';

// Clase de servicio para realizar peticiones HTTP a la API de Ibio
export class ApiService <ItemType, ResponseType = ItemType> {
    protected api: AxiosInstance;
    protected endpoint: string;
    protected baseURL: string;
    protected headers: any;
    protected credentials: boolean;

    constructor(endpoint:string, baseURL: string = import.meta.env.VITE_APP_API_URL, credentials?: boolean, headers?: any) {
        this.endpoint = endpoint;
        this.baseURL = baseURL;
        this.headers = headers ?? {'Content-Type': 'application/json',};
        this.credentials = credentials ?? false;

        this.api = axios.create({
            baseURL: this.baseURL,
            withCredentials: this.credentials,
            headers: this.headers,
        });

        this.api.interceptors.response.use(
            (response) => response.data, // Retornar directamente la data de la respuesta
            (error: AxiosError) => {
                const errorData = error.response?.data as any || {};
            
                // Creamos el ErrorResponse estructurado siguiendo tu patrón actual
                const errorResponse: ErrorResponse = {
                    status: errorData.status || error.response?.status || 500,
                    error: errorData.error || error.code || 'Error',
                    message: errorData.message || error.message || 'An unexpected error occurred',
                    path: errorData.path || error.config?.url || ''
                }
                return Promise.reject(errorResponse);
            }
        );
    }

    protected parseResponse(data: any): ItemType {
        return this.parseItemResponse(data);
    }
    protected parseItemResponse(data: any): ItemType {
      return data as unknown as ItemType; // Implementación por defecto, puede ser sobrescrita
    }

    protected async handleRequest<R>(
        request: Promise<AxiosResponse<R>>,
        isArray: boolean = false,
    ): Promise<R> {
        try {
          const response = await request;
          if (isArray) {
            // @ts-expect-error - Asumimos que la respuesta tiene una estructura { data: ItemType[] }
            return response.data.data;
          }
          return response.data;
        } catch (error) {
          console.error('Error in API request:', error);
          throw error;
        }
    }

    get(endpoint: string, headers?: any): Promise<ItemType[]> {
        return this.handleRequest(this.api.get<ResponseType[]>(endpoint, { headers }), true)
        .then((data) => data.map((item) => this.parseResponse(item)));
    }

    post(endpoint: string, body: any, headers?: any): Promise<ItemType> {
        return this.handleRequest(this.api.post<ResponseType>(endpoint, body, { headers }),)
        .then(this.parseResponse.bind(this));
    }

    put(endpoint: string, body: any, headers?: any): Promise<ItemType> {
        return this.handleRequest(this.api.put<ResponseType>(endpoint, body, { headers }),)
        .then(this.parseResponse.bind(this));
    }

    patch(endpoint: string, body: any, headers?: any): Promise<ItemType> {
        return this.handleRequest(this.api.patch<ResponseType>(endpoint, body, { headers }),)
        .then(this.parseResponse.bind(this));
    }

    delete(endpoint: string, headers?: any): Promise<ItemType> {
        return this.handleRequest(this.api.delete<ResponseType>(endpoint, { headers }),)
        .then(this.parseResponse.bind(this));
    }
}

