import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScaffoldHttpService {

  baseURL!: string;
  apiUrl!: string;

  constructor(
    public httpClient: HttpClient
  ) {
    this.apiUrl = environment.apiAuth;
   }

  
  getAll() {
    return this.httpClient.get(`${environment.apiAuth}/${this.baseURL}`);
  }

  show(id: number) {
    return this.httpClient.get(`${environment.apiAuth}/${this.baseURL}/${id}`);
  }

  store(itemModel: any){
    return this.httpClient.post( `${environment.apiAuth}/${this.baseURL}`, itemModel );
  }

  storeGeneric(itemModel: any, entity: string){
    return this.httpClient.post( `${environment.apiAuth}/${entity}`, itemModel );
  }

  update(id: number, itemModel: any){
    itemModel.Id = id;
    return this.httpClient.put( `${environment.apiAuth}/${this.baseURL}/${id}`, itemModel );
  }

  seachByName(
    filterString?:string,
    page?: number,
    limit?: number
  ){
    let params = {
      filterByName: filterString  ? filterString : '',
      page: page ? page : '',
      records: limit ? limit : ''
    }

    return this.httpClient.get(
      `${environment.apiAuth}/${this.baseURL}`,
      { params: params }
    );
  }

  search(filter: string) {
    let params = {
      filterByName: filter  ? filter : '',
      page: '',
      records: ''
    }

    if (filter === '') {
      return of([]);
    }

    return this.httpClient
      .get<[any, string[]]>(`${environment.apiAuth}/${this.baseURL}`,
      { params: params }).pipe(
        map((response:any) => {
          return response.records
        })
      );
  }

}
