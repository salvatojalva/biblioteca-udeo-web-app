import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoListComponent } from './documento-list/documento-list.component';
import { DocumentoCreateComponent } from './documento-create/documento-create.component';
import { DocumentoEditComponent } from './documento-edit/documento-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DocumentoListComponent,
    DocumentoCreateComponent,
    DocumentoEditComponent
  ],
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    SharedModule
  ]
})
export class DocumentoModule { }
