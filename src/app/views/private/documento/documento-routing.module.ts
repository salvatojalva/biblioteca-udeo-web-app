import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentoCreateComponent } from './documento-create/documento-create.component';
import { DocumentoEditComponent } from './documento-edit/documento-edit.component';
import { DocumentoListComponent } from './documento-list/documento-list.component';
import { DocumentoViewComponent } from './documento-view/documento-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DocumentoListComponent },
  { path: 'edit/:id', component: DocumentoEditComponent },
  { path: 'create', component: DocumentoCreateComponent },
  { path: 'view/:id', component: DocumentoViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoRoutingModule { }
