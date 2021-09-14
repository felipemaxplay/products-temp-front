import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from "@angular/router";
import { Product } from '../product.model';
import { MatSnackBar } from "@angular/material/snack-bar";

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
    private productService: ProductService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {  }

  showMessage(msg: string): void {
    
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  createProduct(): void {

    this.productService.createProduct(this.product).subscribe(() => {
      this.showMessage('Produto Criado!');
      this.router.navigate(['/products']);
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

}
