import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private catergoryId = 3;
  private BASE_URL = 'http://apolis-grocery.herokuapp.com/api'
  constructor(private http: HttpClient) { }

  getCatergory(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/category`)
  
  }


  getSubCatergoryById(): Observable<any>{
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/subcategory/1')
  }

  getProductByCatId(catId: any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/products/cat/${catId}`)
  }

  getProductById(id :any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/products/${id}`)
  }

  getSubCategories(catId:any,subId:any):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/subcategory/${catId}`)

  }
  getProductBySubId(subId: any): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/products/sub/${subId}`);
  }
}
