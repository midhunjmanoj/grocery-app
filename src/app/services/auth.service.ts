import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl="http://apolis-grocery.herokuapp.com/api/auth/"

  constructor(private http: HttpClient) {

   }
   register(userModel:User): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}register`,userModel)
   }
   login(data:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}login`,data)
   }
   checkToken():boolean{
    if(localStorage.getItem('token')){
      return true
    }
    else{
      return false
    }
   }

   logout(){
    localStorage.clear();
  }
}
