import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from "moment";


import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  auth(token:any) {
    return this.httpClient.post(`${environment.api}/Authentication/authenticate`, token)
    .pipe(
      map((data:any) => {
        this.setSession(data);
        return data;
        
      }), catchError( error => {
        localStorage.removeItem("user_data");
        return throwError( 'Something went wrong!' );
      })
   )
    
      
  }

  private setSession(authResult:any) {
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('udeo_user', JSON.stringify(authResult.user));
      localStorage.setItem('id_token', authResult.AuthToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
      localStorage.removeItem("user_data");
      localStorage.removeItem("udeo_user");

  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration:any = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }
}
