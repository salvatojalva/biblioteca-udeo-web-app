import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [{
  path: '',
  component: TemplateComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
      path: 'prestamos',
      loadChildren: () => import('./prestamo/prestamo.module').then(m => m.PrestamoModule),
    },
    {
      path: 'documentos',
      loadChildren: () => import('./documento/documento.module').then(m => m.DocumentoModule),
    },
    {
      path: 'autores',
      loadChildren: () => import('./autor/autor.module').then(m => m.AutorModule),
    },
    {
      path: 'categorias',
      loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule),
    },
    {
      path: 'anios',
      loadChildren: () => import('./anio/anio.module').then(m => m.AnioModule),
    },
    {
      path: 'divisiones',
      loadChildren: () => import('./division/division.module').then(m => m.DivisionModule),
    },
    {
      path: 'editoriales',
      loadChildren: () => import('./editorial/editorial.module').then(m => m.EditorialModule),
    },
    {
      path: 'carreras',
      loadChildren: () => import('./carrera/carrera.module').then(m => m.CarreraModule),
    },
    {
      path: 'sedes',
      loadChildren: () => import('./sede/sede.module').then(m => m.SedeModule),
    },
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
