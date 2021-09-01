import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraRoutingModule } from './carrera-routing.module';
import { CarreraListComponent } from './carrera-list/carrera-list.component';
import { CarreraEditComponent } from './carrera-edit/carrera-edit.component';
import { CarreraCreateComponent } from './carrera-create/carrera-create.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CarreraListComponent,
    CarreraEditComponent,
    CarreraCreateComponent
  ],
  imports: [
    CommonModule,
    CarreraRoutingModule,
    SharedModule
  ]
})
export class CarreraModule { }
