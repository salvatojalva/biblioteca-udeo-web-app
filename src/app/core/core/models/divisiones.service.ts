import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ScaffoldHttpService } from '../services/scaffold-http.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionesService extends ScaffoldHttpService {

  constructor(
    public httpClient: HttpClient
  ) {
    super(httpClient); //Vamos a consultar a nuestra APPI
    this.baseURL = 'Division' // Nombre de tabla en la base de datos
  }
}
