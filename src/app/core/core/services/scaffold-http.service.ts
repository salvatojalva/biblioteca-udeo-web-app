import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScaffoldHttpService {

  baseURL!: string;

  constructor(
    public httpClient: HttpClient
  ) { }

  
  getAll() {
    return this.httpClient.get(`${environment.apiAuth}/${this.baseURL}`);
  }

  show(id: number) {
    return this.httpClient.get(`${environment.apiAuth}/${this.baseURL}/${id}`);
  }

  store(itemModel: any){
    return this.httpClient.post( `${environment.apiAuth}/${this.baseURL}`, itemModel );
  }

  update(id: number, itemModel: any){
    itemModel.Id = id;
    return this.httpClient.put( `${environment.apiAuth}/${this.baseURL}/${id}`, itemModel );
  }

  seachByName(queryString:string){
    return this.httpClient.get(`${environment.apiAuth}/${this.baseURL}/SearchByName/${queryString}`);
  }

}
