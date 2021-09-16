import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = "http://localhost:8080/api/product";

  constructor(private http: HttpClient) { }

  createProduct(product: Product): Observable<Product> {
    
    return this.http.post<Product>(this.baseUrl, product);
  }

  readPageProduct(page: number, size: number, sort: string): Observable<Page> {
    
    return this.http.get<Page>(this.baseUrl + `?page=${page}&size=${size}&sort=${sort}`);
  }

}
