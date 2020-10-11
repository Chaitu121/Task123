import { Component,Renderer2, AfterViewInit  } from '@angular/core';

import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { filter, distinctUntilChanged, map, subscribeOn } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title:any ; logout:boolean=false;
  routess:any;showup:boolean=false;

//private ass:Assign4Component,
//private lss:LocalStorageService
constructor(private route: ActivatedRoute,private router:Router,private localSt:LocalStorageService){
  this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
    //set breadcrumbs
    let root: ActivatedRoute = this.route.root;
this.getBreadcrumbs(root);
  
     
  });
   let kl=this.localSt.retrieve('boundValue');
   console.log(kl)
// this.route.queryParams.subscribe((params )=> {
//   this.title = params['name'];
//   console.log(params);
// });

}
ngAfterViewInit() {}

 

  getBreadcrumbs(route: ActivatedRoute, url: string = ""){
 

    let children: ActivatedRoute[] = route.children;
    var lk:any=route.snapshot
    this.routess=lk._routerState.url;
  console.log(this.routess)
 
  if(this.routess=='/assign4home'||this.routess=='/assign4/login' ||this.routess=='/assign4/signup'){
    this.showup=true;
    this.logout=false;
  }else {
    this.showup=false;
    this.logout=false;
    
  }
  if(this.routess=='/welcome'){
    this.logout=true;
  }else {
    this.logout=false;
    
  }
  let kl=this.localSt.retrieve('boundValue');
  console.log(kl);if(kl==null){
    this.showup=true;
    this.logout=false;
  }else{
    this.showup=false;
    this.logout=true;

  }

  // if(this.lss.retrieve('user')){
  //   this.showup=false;
  //   this.logout=true;
  //   this.title=this.lss.retrieve('user').username;
  // }
  
  }
  logot(){
    this.localSt.clear();
    this.showup=true;
    this.logout=false;
    // this.lss.clear('user')
    // this.title=', please login/signup';
    // this.ass.change();
  
    this.router.navigate(['/assign4/assign4home'])
  }
}
