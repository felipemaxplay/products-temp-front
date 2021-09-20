import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/page.model';
import { Product } from './product.model';
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  createProduct(product: Product): Observable<Product> {
    
    return this.http.post<Product>(this.baseUrl, product)
    .pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readPageProduct(page?: number, size?: number): Observable<Page> {
    
    if(!page && !size) {
      return this.http.get<Page>(this.baseUrl)
      .pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }
    return this.http.get<Page>(`${this.baseUrl}?page=${page}&size=${size}`)
    .pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url)
    .pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product)
    .pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url)
    .pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('An error has occurred.', true);
    return EMPTY;
  }

}
