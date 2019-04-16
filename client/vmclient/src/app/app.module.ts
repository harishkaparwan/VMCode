import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VmloginComponent } from './vmlogin/vmlogin.component';
import { VmregformComponent } from './vmregform/vmregform.component';
import { VmregformService } from './vmregform/vmregform.service';
import { VmdashboardComponent } from './vmdashboard/vmdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VmThemeMaterialModule } from './vm-theme-material/vm-theme-material.module';
import { HttpClientModule } from '@angular/common/http';
import { VmmainlayoutComponent } from './vmmainlayout/vmmainlayout.component';


@NgModule({
  declarations: [
    AppComponent,
    VmregformComponent,
    VmdashboardComponent,
    VmloginComponent,
    VmmainlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    VmThemeMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [VmregformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
