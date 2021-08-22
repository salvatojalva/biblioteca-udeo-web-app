import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class UdeoInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  )
  {}
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {


      const idToken = localStorage.getItem("id_token");

      if (idToken) {
          const cloned = req.clone({
              headers: req.headers.set("Authorization",
                  "Bearer " + idToken)
          });

          return next.handle(cloned);
      }
      else {
        if(this.router.url != '/auth/login')
        {
          this.router.navigate([`auth`]);
        }
        
        return next.handle(req);
          
      }


  }
}