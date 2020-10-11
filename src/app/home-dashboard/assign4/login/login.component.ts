import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
//import{AuthserviceService} from'./../authservice.service';
//import{LocalStorageService} from'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { loginForm: FormGroup;
  loading = false;its:any[]
  submitted = false;
  returnUrl: string;
  //private lsss:LocalStorageService,private auth  :AuthserviceService,
  constructor(private localSt:LocalStorageService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
     ) {

      this.its=[1,2,3,4,5];
     }
  
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  
      
  
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      console.log( this.returnUrl )
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  
  onSubmit() {
      this.submitted = true;
      console.log(this.loginForm.value)
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
  else{
    //this.lsss.store('user',this.loginForm.value)
    console.log(this.loginForm.value)
    //this.auth.login()
    this.localSt.store('boundValue', this.loginForm.value);
    this.router.navigate(['/assign4home'])
  }
}
    }