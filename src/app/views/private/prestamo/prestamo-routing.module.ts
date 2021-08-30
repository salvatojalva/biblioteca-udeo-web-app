import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamoCreateComponent } from './prestamo-create/prestamo-create.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';
import { PrestamoListComponent } from './prestamo-list/prestamo-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PrestamoListComponent },
  { path: 'edit/:id', component: PrestamoEditComponent },
  { path: 'create', component: PrestamoCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamoRoutingModule { }
