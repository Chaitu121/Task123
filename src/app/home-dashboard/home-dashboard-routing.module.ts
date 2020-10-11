import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { Assign1Component } from './assign1/assign1.component';
import { Assign2Component } from './assign2/assign2.component';
import { Assign3Component } from './assign3/assign3.component';
//import { Assign4Component } from './assign4/assign4.component';
import { Assign5Component } from './assign5/assign5.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  { path: 'assign1', component: Assign1Component },
    { path: 'assign2', component: Assign2Component } ,
    { path: 'assign3', component: Assign3Component } ,
    {path : 'assign4', loadChildren : './assign4/assign4.module#Assign4Module'},
    // { path: 'assign4', component: Assign4Component  } ,
    { path: 'assign5', component: Assign5Component } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule { }
