import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialRoutingModule } from './editorial-routing.module';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { EditorialCreateComponent } from './editorial-create/editorial-create.component';
import { EditorialEditComponent } from './editorial-edit/editorial-edit.component';


@NgModule({
  declarations: [
    EditorialListComponent,
    EditorialCreateComponent,
    EditorialEditComponent
  ],
  imports: [
    CommonModule,
    EditorialRoutingModule
  ]
})
export class EditorialModule { }
