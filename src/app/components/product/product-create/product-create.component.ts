import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private router:Router,
    private productService: ProductService) { }

  ngOnInit(): void {  }

  createProduct(): void {
    this.productService.showMessage('Produto Criado!');
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

}
