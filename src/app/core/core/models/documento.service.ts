import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScaffoldHttpService } from '../services/scaffold-http.service';

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


    console.log(form_data);

    return form_data;
  }
}
