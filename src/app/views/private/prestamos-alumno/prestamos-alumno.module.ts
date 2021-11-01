import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosAlumnoRoutingModule } from './prestamos-alumno-routing.module';
import { PrestamoListalumnoComponent } from './prestamo-list/prestamo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PrestamoListalumnoComponent
  ],
  imports: [
    CommonModule,
    PrestamosAlumnoRoutingModule,
    SharedModule
  ]
})
export class PrestamosAlumnoModule { }
