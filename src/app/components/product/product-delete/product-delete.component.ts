import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    const id = this.route.snapshot.params.id;
    this.productService.readById(id).subscribe(prod => {
      this.product = prod;
    });
  }

  deleteProduct(): void {
    const id: string = `${this.product.id}`;
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage("successfully deleted product");
      this.router.navigate(["/products"]);
    });
  }

  cancelProduct(): void {
    this.router.navigate(["/products"]);
  }

}
