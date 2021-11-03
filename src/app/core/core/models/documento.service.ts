import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScaffoldHttpService } from '../services/scaffold-http.service';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService extends ScaffoldHttpService{

  constructor(
    public httpClient: HttpClient
  ) {
    super(httpClient);
    this.baseURL = 'Documento'
  }

  addDocument(itemModel: any){

    return this.httpClient.post( `${this.apiUrl}/${this.baseURL}/UploadDocumento`, this.toFormData(itemModel) );
  }

  toFormData(item:any){
    var form_data = new FormData();

    for ( var key in item.Documento ) {
      form_data.append(key, item.Documento[key]);
    }

    for ( var key in item.BelongsTo ) {
      form_data.append(`${key}[Id]`, item.BelongsTo[key]);
    }
    let cont = 0;

    for ( var key in item.Tags ) {
      cont++;
      form_data.append(`Tags[${cont}][Id]`, item.Tags[key].Id);
    }
    for ( var key in item.Autores ) {
      cont++;
      form_data.append(`Autores[${cont}][Id]`, item.Autores[key].Id);
    }

    return form_data;
  }

  customFiltered(
    filtro1: string, 
    FilterByAutor?: string, 
    FilterByTag?:string, 
    page?: number, 
    limit?: number, 
  ) {
    let params = {
      filtro1: filtro1  ? filtro1 : '',
      FilterByAutor: FilterByAutor  ? FilterByAutor : '',
      FilterByTag: FilterByTag  ? FilterByTag : '',
      page: page ? page : '',
      records: limit ? limit : ''
    }

    return this.httpClient.get(
      `${this.apiUrl}/${this.baseURL}/Busqueda`,
      { params: params }
    );
  }

  searchOP(
    filtro1: string, 
    FilterByAutor?: string, 
    FilterByTag?:string, 
    page?: number, 
    limit?: number, 
  ) {
    let params = {
      filtro1: filtro1  ? filtro1 : '',
      FilterByAutor: FilterByAutor  ? FilterByAutor : '',
      FilterByTag: FilterByTag  ? FilterByTag : '',
      page: page ? page : '',
      records: limit ? limit : ''
    }

    if (filtro1 === '') {
      return of([]);
    }

    return this.httpClient
      .get<[any, string[]]>(`${this.apiUrl}/${this.baseURL}/Busqueda`,
      { params: params }).pipe(
        map((response:any) => {
          return response.result
        })
      );
  }


}
