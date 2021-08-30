import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorialCreateComponent } from './editorial-create/editorial-create.component';
import { EditorialEditComponent } from './editorial-edit/editorial-edit.component';
import { EditorialListComponent } from './editorial-list/editorial-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: EditorialListComponent },
  { path: 'edit/:id', component: EditorialEditComponent },
  { path: 'create', component: EditorialCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorialRoutingModule { }
