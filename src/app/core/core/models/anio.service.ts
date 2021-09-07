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
    super(httpClient); //Vamos a consultar a nuestra APPI
    this.baseURL = 'Anio' // Nombre de tabla de la base de datos
  }


}
