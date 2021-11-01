import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamoListalumnoComponent } from '../prestamos-alumno/prestamo-list/prestamo-list.component';
import { PrestamoListprofesorComponent } from '../prestamos-profesor/prestamo-list/prestamo-list.component';
import { PrestamoCreateComponent } from './prestamo-create/prestamo-create.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PrestamoListComponent },
  { path: 'edit/:id', component: PrestamoEditComponent },
  { path: 'create', component: PrestamoCreateComponent },
  { path: 'listalumno', component: PrestamoListalumnoComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamoRoutingModule { }
