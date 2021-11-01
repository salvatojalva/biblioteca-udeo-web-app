import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrestamoListprofesorComponent } from './prestamo-list/prestamo-list.component';
import { PrestamosProfesorRoutingModule } from './prestamos-profesor.routing.module';


@NgModule({
  declarations: [
    PrestamoListprofesorComponent
  ],
  imports: [
    CommonModule,
    PrestamosProfesorRoutingModule,
    SharedModule
  ]
})
export class PrestamosProfesorModule { }
