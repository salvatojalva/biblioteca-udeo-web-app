import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { AutorListComponent } from './autor-list/autor-list.component';
import { AutorCreateComponent } from './autor-create/autor-create.component';
import { AutorEditComponent } from './autor-edit/autor-edit.component';


@NgModule({
  declarations: [
    AutorListComponent,
    AutorCreateComponent,
    AutorEditComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule
  ]
})
export class AutorModule { }
