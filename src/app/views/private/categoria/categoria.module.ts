import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';


@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriaCreateComponent,
    CategoriaEditComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
