import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { AnioComponent } from './anio/anio.component';
//import { SharedModule } from 'src/app/shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
//import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    TemplateComponent,
    AnioComponent
  ],
  imports: [
    CommonModule,
    //SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
