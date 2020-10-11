import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { ViewChild} from '@angular/core'; 
@Component({
  selector: 'app-assign3',
  templateUrl: './assign3.component.html',
  styleUrls: ['./assign3.component.css']
})
export class Assign3Component {
  model: any = {};
 formChangesSubscription: any;
  @ViewChild('f', { static: true }) form: NgForm;
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  valuechanged(k){
    switch(k) {
  
 
  case 3:
  if(this.model.checking){ this.model.gfirstName=this.model.firstName;
   this.model.glastName=this.model.lastName}
    break;
  default:
    break;
}

    
  }
  ngOnInit() {
   this.form.valueChanges.subscribe(x => {
    console.log(x);
    if(this.model.checking){ this.model.gfirstName=this.model.firstName;
   this.model.glastName=this.model.lastName}
  })
}


}

