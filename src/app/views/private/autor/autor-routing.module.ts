import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorCreateComponent } from './autor-create/autor-create.component';
import { AutorEditComponent } from './autor-edit/autor-edit.component';
import { AutorListComponent } from './autor-list/autor-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AutorListComponent },
  { path: 'edit/:id', component: AutorEditComponent },
  { path: 'create', component: AutorCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
