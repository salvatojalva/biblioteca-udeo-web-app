import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScaffoldHttpService } from '../services/scaffold-http.service';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class PrestamoService extends ScaffoldHttpService{
=======
export class PrestamoService extends ScaffoldHttpService {
>>>>>>> 070d2630969e17aef75dffa7652151dc8338190b

  constructor(
    public httpClient: HttpClient
  ) {
    super(httpClient);
    this.baseURL = 'Prestamo'
  }
}
