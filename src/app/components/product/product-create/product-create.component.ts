import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from "@angular/router";
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: 0,
    description: ""
  };

  constructor(private router:Router,
    private productService: ProductService) { }

  ngOnInit(): void {  }

  createProduct(): void {

    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage('Created Product');
      this.router.navigate(['/products']);
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

}
