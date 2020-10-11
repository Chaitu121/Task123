import { Component, OnInit } from '@angular/core';
import{ServiceService} from './service.service'
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-assign4',
  templateUrl: './assign4.component.html',
  styleUrls: ['./assign4.component.css']
})
export class Assign4Component implements OnInit {
title:string="please login/signup";data=[];pasr=[1,2,3,4,5]
  constructor(private localSt:LocalStorageService,private serv:ServiceService) { 
   
    let kl=this.localSt.retrieve('boundValue');
    console.log(kl)
    if(kl==null){
      this.title="please login/signup"
    }else{this.title=this.localSt.retrieve('boundValue').username}

  
  }

  ngOnInit(): void {
    this.serv.ch().subscribe(datas=>  {
     // this.data =datas;
   });
  }

}
