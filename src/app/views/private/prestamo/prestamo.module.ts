import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';
import { PrestamoRoutingModule } from './prestamo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrestamoCreateComponent } from './prestamo-create/prestamo-create.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';



@NgModule({
  declarations: [
    PrestamoListComponent,
    PrestamoCreateComponent,
    PrestamoEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrestamoRoutingModule
  ]
})
export class PrestamoModule { }
