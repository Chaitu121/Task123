import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { Assign1Component } from './assign1/assign1.component';
import { Assign2Component } from './assign2/assign2.component';
import { Assign3Component } from './assign3/assign3.component';
import { Assign5Component } from './assign5/assign5.component';
import { Assign4Module } from './assign4/assign4.module';
import {FormsModule,ReactiveFormsModule,} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, Assign1Component, Assign2Component, Assign3Component, Assign5Component],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    HomeDashboardRoutingModule,Assign4Module
  ]
})
export class HomeDashboardModule { }
