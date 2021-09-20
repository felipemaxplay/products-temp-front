import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/page.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createProduct(product: Product): Observable<Product> {
    
    return this.http.post<Product>(this.baseUrl, product);
  }

  readPageProduct(page?: number, size?: number): Observable<Page> {
    
    if(!page && !size) {
      return this.http.get<Page>(this.baseUrl);
    }
    return this.http.get<Page>(`${this.baseUrl}?page=${page}&size=${size}`);
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }

}
