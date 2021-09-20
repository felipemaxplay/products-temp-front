import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    const id = this.route.snapshot.params.id;
    this.productService.readById(id).subscribe(prod => {
      this.product = prod;
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(prodNew => {
      this.productService.showMessage('product updated successfully');
      this.router.navigate(['/products']);
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

}
