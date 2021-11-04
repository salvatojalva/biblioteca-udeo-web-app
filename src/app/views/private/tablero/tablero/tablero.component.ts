import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  user: any;

  constructor() { }


  ngOnInit(): void {
    this.user = localStorage.getItem("udeo_user");

    this.user = JSON.parse(this.user);
  }

}
