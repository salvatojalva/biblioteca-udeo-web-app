import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';

@NgModule({
  declarations: [
    TemplateComponent,
    DashboardUsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
