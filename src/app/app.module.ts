import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import{ServiceService} from '././home-dashboard/assign4/service.service'
import {FormsModule,ReactiveFormsModule,} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeDashboardModule }from'./home-dashboard/home-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CommonModule,
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,HomeDashboardModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
