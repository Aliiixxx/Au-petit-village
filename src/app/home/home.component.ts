import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  presentation =
    '“Au petit village” est une entreprise qui confectionne des figurines inspirées de la bande dessinée Astérix et Obélix';

  products: any[];

  searchTerm: string = '';
  sortBy: string = '';

  constructor(private router: Router, private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  viewProductDetail(product: any) {
    const navigationExtras = {
      state: { product, price: product.price },
    };
    this.router.navigate(['/product', product.name], navigationExtras);
  }

  sortProducts() {
    if (this.sortBy === 'asc') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'desc') {
      this.products.sort((a, b) => b.price - a.price);
    }
  }
}
