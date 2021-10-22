import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScaffoldHttpService } from '../services/scaffold-http.service';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class PrestamoService extends ScaffoldHttpService {
=======
export class PrestamoService extends ScaffoldHttpService{
>>>>>>> 9c724ce4dfd981a66456aad97887ff3fa5a8ce32

  constructor(
    public httpClient: HttpClient
  ) {
    super(httpClient);
    this.baseURL = 'Prestamo'
  }
}
