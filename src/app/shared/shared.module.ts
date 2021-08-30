import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

const COMPONENTS = [
  HeaderComponent,
  SideMenuComponent
]

const MODULES = [
  FormsModule,
  ReactiveFormsModule
];



@NgModule({
  declarations: [
    ...COMPONENTS
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
