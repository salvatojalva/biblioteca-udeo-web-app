import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScaffoldHttpService } from '../services/scaffold-http.service';

@Injectable({
  providedIn: 'root'
})
export class AnioService extends ScaffoldHttpService {

  constructor(
    public httpClient: HttpClient
  ) { 
    super(httpClient);
    this.baseURL = 'Anio'
  }

  
}
