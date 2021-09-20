import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { Page } from '../../models/page.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  dataSource: Page = new Page;
  pageEvent: PageEvent = new PageEvent;

  displayedColumns: string[] = ["id", "name", "price", "description", "action"]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onPageChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;

    this.getProducts(page, size);
  }

  getProducts(page?: number, size?: number) {
    this.productService.readPageProduct(page, size).pipe(
      map((pageData: Page) => this.dataSource = pageData)
    ).subscribe();
  }

}
