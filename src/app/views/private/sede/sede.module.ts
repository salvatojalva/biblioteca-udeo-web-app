import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedeRoutingModule } from './sede-routing.module';
import { SedeListComponent } from './sede-list/sede-list.component';
import { SedeEditComponent } from './sede-edit/sede-edit.component';
import { SedeCreateComponent } from './sede-create/sede-create.component';


@NgModule({
  declarations: [
    SedeListComponent,
    SedeEditComponent,
    SedeCreateComponent
  ],
  imports: [
    CommonModule,
    SedeRoutingModule
  ]
})
export class SedeModule { }
