import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Assign4Component } from './assign4.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {FormsModule,ReactiveFormsModule,} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import{ServiceService} from './service.service';
import { HOMEComponent } from './home/home.component';
import { ChildComponent } from './child/child.component'
const routes: Routes = [
  {path : 'assign4home', component : HOMEComponent}, {path : 'login', component : LoginComponent},{path : 'signup', component : SignupComponent},
  {path : '', redirectTo : '/assign4home', pathMatch : 'full'}]

@NgModule({
  declarations: [LoginComponent, SignupComponent, HOMEComponent, ChildComponent],
  imports: [   CommonModule,RouterModule.forChild(routes),FormsModule,Ng2SearchPipeModule,ReactiveFormsModule, NgxWebstorageModule.forRoot(),HttpClientModule,
  
  ], exports: [RouterModule],providers:[]
})
export class Assign4Module { }
