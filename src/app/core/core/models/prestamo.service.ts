import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScaffoldHttpService } from '../services/scaffold-http.service';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService extends ScaffoldHttpService{

  constructor(
    public httpClient: HttpClient
  ) {
    super(httpClient);
    this.baseURL = 'Prestamo'
  }


  solicitar(itemModel: any){
    return this.httpClient.post( `${this.apiUrl}/${this.baseURL}/Solicitar`, itemModel );
  }


  listPorAprobar(
    showList: string,
    page?: number,
    limit?: number
  ){
    let params = {
      page: page ? page : '',
      records: limit ? limit : ''
    }

    return this.httpClient.get(
      `${this.apiUrl}/${this.baseURL}/${showList}`,
      { params: params }
    );
  }

  misPrestamos(
    userId: number,
    page?: number,
    limit?: number
  ){
    let params = {
      UsuarioID: userId,
      page: page ? page : '',
      records: limit ? limit : ''
    }

    return this.httpClient.get(
      `${this.apiUrl}/${this.baseURL}/FechaFin`,
      { params: params }
    );
  }

  aprobar(id: number){
    return this.httpClient.post( `${this.apiUrl}/${this.baseURL}/Aprobar/${id}`, {} );
  }

  denegar(id: number){
    return this.httpClient.post( `${this.apiUrl}/${this.baseURL}/Denegar/${id}`, {} );
  }

}
