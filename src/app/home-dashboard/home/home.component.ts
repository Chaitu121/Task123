import { Component, OnInit } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  go(k:any){
    console.log(k);
    switch (k)
​{
    case 1:
      console.log(k);
      this.router.navigate(['/assign1'])
      break;

    case 2:
      this.router.navigate(['/assign2'])
      break;
      case 3:
        this.router.navigate(['/assign3'])
        break;
        case 4:
          this.router.navigate(['/assign4'])
          break;
          case 5:
            this.router.navigate(['/assign5'])
            break;
   
    default:
      console.log(k);
}
  }
}
