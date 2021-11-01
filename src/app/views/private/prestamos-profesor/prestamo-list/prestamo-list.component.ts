import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prestamo-list',
  templateUrl: './prestamo-list.component.html',
  styleUrls: ['./prestamo-list.component.scss']
})
export class PrestamoListprofesorComponent implements OnInit {
  items!: any;

  subItem!: Subscription;
  subArray: Subscription[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
