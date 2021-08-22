import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnioService {

  anioUrl: string = '/Anio';
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll() {
    return this.httpClient.get(`${environment.apiAuth}${this.anioUrl}`);
  }

  store(anio: any) {
    return this.httpClient.post(`${environment.apiAuth}${this.anioUrl}`, anio);
  }
}
