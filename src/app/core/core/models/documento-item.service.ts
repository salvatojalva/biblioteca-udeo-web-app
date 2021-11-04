import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScaffoldHttpService } from '../services/scaffold-http.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentoItemService extends ScaffoldHttpService{

  constructor(
    public httpClient: HttpClient
  ) {
      super(httpClient);
      this.baseURL = 'DocumentoItem'
   }

    itemsByDocument(id: number) {
    return this.httpClient.get(`${this.apiUrl}/${this.baseURL}/Documento/${id}`);
  }
}
