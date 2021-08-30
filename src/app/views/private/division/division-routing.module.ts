import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { DivisionEditComponent } from './division-edit/division-edit.component';
import { DivisionListComponent } from './division-list/division-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DivisionListComponent },
  { path: 'edit/:id', component: DivisionEditComponent },
  { path: 'create', component: DivisionCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
