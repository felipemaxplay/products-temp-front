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
    name: "Product Temp",
    price: 9999.50,
    description: "Exemplo temporario para ver se pega o chamado front-end."
  };

  constructor(private router:Router,
    private productService: ProductService) { }

  ngOnInit(): void {  }

  createProduct(): void {

    this.productService.createProduct(this.product).subscribe(() => {

      this.productService.showMessage('Produto Criado!');
      this.router.navigate(['/products']);
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

}
