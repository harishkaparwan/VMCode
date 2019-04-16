import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class VmregformService {
  public API = 'api/signup';
 

  constructor(private http: HttpClient) {
  }
 
  save(vmregform: any): Observable<any> {
    let result: Observable<Object>;
     result = this.http.post(this.API, vmregform);
    
    return result;
  }
}
