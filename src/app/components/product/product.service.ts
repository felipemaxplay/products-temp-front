import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  readProduct(pageNumber: number): Observable<any> {
    
    return this.http.get(this.baseUrl + "?page=" + pageNumber);
  }

}
