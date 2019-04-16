import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VmloginComponent } from './vmlogin/vmlogin.component';
import { VmregformComponent } from './vmregform/vmregform.component';
import { VmdashboardComponent } from './vmdashboard/vmdashboard.component';
import { VmmainlayoutComponent } from './vmmainlayout/vmmainlayout.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '',  pathMatch: 'full', component: VmmainlayoutComponent },
   { path: 'dashboard', component: VmdashboardComponent }
];
@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
