import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Resumen de ingresos';
  user: any;

  constructor() {
    this.user = localStorage.getItem("user_data");

    this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {
  }

}
