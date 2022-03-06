import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { RouterModule, Routes } from '@angular/router';
import { SignaturePadModule } from 'angular2-signaturepad';
const routes:Routes=[{path:'dashboard', component:ContentAreaComponent}]

@NgModule({
  declarations: [
    ContentAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SignaturePadModule
  ]
})
export class DashboardModule { }
