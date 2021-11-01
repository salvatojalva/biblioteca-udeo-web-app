import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormAutorComponent } from './forms/form-autor/form-autor.component';
import { FormCategoriaComponent } from './forms/form-categoria/form-categoria.component';
import { FormAnioComponent } from './forms/form-anio/form-anio.component';
import { FormDivisionComponent } from './forms/form-division/form-division.component';
import { FormEditorialComponent } from './forms/form-editorial/form-editorial.component';
import { FormCarreraComponent } from './forms/form-carrera/form-carrera.component';
import { FormSedeComponent } from './forms/form-sede/form-sede.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
<<<<<<< HEAD
import { FormPrestamoComponent } from './forms/form-prestamo/form-prestamo.component';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FomrModalComponent } from './forms/fomr-modal/fomr-modal.component';
import { FormTagComponent } from './forms/form-tag/form-tag.component';
import { FormTipoComponent } from './forms/form-tipo/form-tipo.component';
import { ToastComponent } from './toast/toast.component';
import { SideMenuStudentComponent } from './side-menu-student/side-menu-student.component';
>>>>>>> 070d2630969e17aef75dffa7652151dc8338190b

const COMPONENTS = [
  HeaderComponent,
  SideMenuComponent,
  FormAutorComponent,
  FormCategoriaComponent,
  FormAnioComponent,
  FormDivisionComponent,
  FormEditorialComponent,
  FormCarreraComponent,
  FormSedeComponent,
<<<<<<< HEAD
  FormPrestamoComponent
=======
  FomrModalComponent,
  FormTagComponent,
  FormTipoComponent,
  ToastComponent,
  SideMenuStudentComponent
>>>>>>> 070d2630969e17aef75dffa7652151dc8338190b
]

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
  NgxPaginationModule,
  NgxExtendedPdfViewerModule,
  NgbModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FormPrestamoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
