import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnioComponent } from './anio/anio.component';

const routes: Routes = [
  { path: '', redirectTo: 'anio', pathMatch: 'full' },
  { path: 'anio', component: AnioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
