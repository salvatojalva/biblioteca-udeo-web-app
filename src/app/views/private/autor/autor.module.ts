import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { AutorListComponent } from './autor-list/autor-list.component';
import { AutorCreateComponent } from './autor-create/autor-create.component';
import { AutorEditComponent } from './autor-edit/autor-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AutorListComponent,
    AutorCreateComponent,
    AutorEditComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    SharedModule
  ]
})
export class AutorModule { }
