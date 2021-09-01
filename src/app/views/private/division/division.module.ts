import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionRoutingModule } from './division-routing.module';
import { DivisionListComponent } from './division-list/division-list.component';
import { DivisionEditComponent } from './division-edit/division-edit.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DivisionListComponent,
    DivisionEditComponent,
    DivisionCreateComponent
  ],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    SharedModule
  ]
})
export class DivisionModule { }
