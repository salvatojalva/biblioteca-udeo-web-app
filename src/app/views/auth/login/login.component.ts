import { Component, OnInit } from '@angular/core';
import { SocialAuthService  } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { GoogleAuthService } from 'src/app/core/core/services/google-auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/core/services/toast.service';

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
    private toastService: ToastService
  ) {

    this.user = null;
    this.authService.authState.subscribe((user: SocialUser) => {
      
      if(user){
        
        this.gAuth.auth({IdToken: user.idToken})
          .subscribe(
            () =>{

              localStorage.setItem('user_data', JSON.stringify(user))
              
              this.router.navigate([`private`]);
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
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => {
      let domain = x.email.substring(x.email.lastIndexOf("@") +1);
      if(domain != "udeo.edu.gt"){
        this.toastService.show(
          'Tu correo no es permitido en este sistema',
          { classname: 'bg-danger text-light', delay: 2500 }
        );
      }
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  showStandard() {
    
  }

}
