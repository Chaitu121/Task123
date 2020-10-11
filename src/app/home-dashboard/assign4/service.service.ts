import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {
    
   }
   ch(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map((res:Response) => res)); 
  }
}
