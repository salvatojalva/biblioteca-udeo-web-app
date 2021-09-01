import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnioRoutingModule } from './anio-routing.module';
import { AnioListComponent } from './anio-list/anio-list.component';
import { AnioCreateComponent } from './anio-create/anio-create.component';
import { AnioEditComponent } from './anio-edit/anio-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AnioListComponent,
    AnioCreateComponent,
    AnioEditComponent
  ],
  imports: [
    CommonModule,
    AnioRoutingModule,
    SharedModule
  ]
})
export class AnioModule { }
