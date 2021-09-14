import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  pageNumber: number = 0;
  products!: Array<any>;
  pageNumbers!: Array<number>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.readProduct(this.pageNumber).subscribe(productData => {
      this.products = productData['content'];
      this.pageNumbers = new Array(productData['totalPages']);
      console.log(productData);
    });
  }

}
