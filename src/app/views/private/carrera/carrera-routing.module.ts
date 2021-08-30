import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraCreateComponent } from './carrera-create/carrera-create.component';
import { CarreraEditComponent } from './carrera-edit/carrera-edit.component';
import { CarreraListComponent } from './carrera-list/carrera-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CarreraListComponent },
  { path: 'edit/:id', component: CarreraEditComponent },
  { path: 'create', component: CarreraCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarreraRoutingModule { }
