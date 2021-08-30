import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnioCreateComponent } from './anio-create/anio-create.component';
import { AnioEditComponent } from './anio-edit/anio-edit.component';
import { AnioListComponent } from './anio-list/anio-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AnioListComponent },
  { path: 'edit/:id', component: AnioEditComponent },
  { path: 'create', component: AnioCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnioRoutingModule { }
