import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedeCreateComponent } from './sede-create/sede-create.component';
import { SedeEditComponent } from './sede-edit/sede-edit.component';
import { SedeListComponent } from './sede-list/sede-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SedeListComponent },
  { path: 'edit/:id', component: SedeEditComponent },
  { path: 'create', component: SedeCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedeRoutingModule { }
