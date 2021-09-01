import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleAuthService } from 'src/app/core/core/services/google-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Resumen de ingresos';
  user!: any;

  constructor(
    private router: Router,
    private gAuth: GoogleAuthService,
  ) {
    this.user = localStorage.getItem("user_data");

    if(this.gAuth.isLoggedIn())
      this.user = JSON.parse(this.user);
    else{
      this.logout();
    }
      
  }

  ngOnInit(): void {
  }

  logout(){
    this.gAuth.logout();
    
    this.router.navigate([`auth`]);
  }

}
