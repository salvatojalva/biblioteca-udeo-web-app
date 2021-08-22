import { Component, OnInit } from '@angular/core';
import { SocialAuthService  } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { GoogleAuthService } from 'src/app/core/core/services/google-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: SocialUser | null; 
  errorExist: boolean = false;
  constructor(
    private authService: SocialAuthService,
    private gAuth: GoogleAuthService,
    private router: Router,
  ) {

    this.user = null;
    this.authService.authState.subscribe((user: SocialUser) => {
      
      if(user){
        this.gAuth.auth({IdToken: user.idToken})
          .subscribe(
            (res:any) =>{
              this.user = user;
              console.log("From the from the login component")
              console.log(res);
              this.router.navigate([`private/anio`]);
            },
            (err:any) => {
              this.errorExist = true;
              this.user = null;
              console.log(err)
            }
          );
      }

    });

  }

  ngOnInit(): void {
    const idToken = localStorage.getItem("id_token");

    if (idToken) {
      this.router.navigate([`private`]);
    }
  }

  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }

}
