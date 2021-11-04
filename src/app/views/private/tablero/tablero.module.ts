import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroRoutingModule } from './tablero-routing.module';
import { TableroComponent } from './tablero/tablero.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TableroComponent
  ],
  imports: [
    CommonModule,
    TableroRoutingModule,
    SharedModule
  ]
})
export class TableroModule { }
