import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://blockchain-nestjs-backend.onrender.com/' // Substitua pela sua base URL em process.env
    });
  }

  public get(url: string) {
    return this.axiosInstance.get(url);
  }

  public post(url: string, data: any) {
    return this.axiosInstance.post(url, data);
  }

  // Adicione outros métodos (put, delete, etc.) conforme necessário
}
