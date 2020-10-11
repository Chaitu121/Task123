import { Component, OnInit } from '@angular/core';
import{ServiceService} from './../service.service'
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {
  title:string="please login/signup";data:any=[];pasr=[1,2,3,4,5];searchText;
    constructor(private localSt:LocalStorageService,private serv:ServiceService) { 
     
      let kl=this.localSt.retrieve('boundValue');
      console.log(kl)
      if(kl==null){
        this.title="please login/signup"
      }else{this.title=this.localSt.retrieve('boundValue').username}
  
    
    }
  
    ngOnInit(): void {
      this.serv.ch().subscribe(datas=>  {
        this.data =datas;
     });
    }
  
  }
  