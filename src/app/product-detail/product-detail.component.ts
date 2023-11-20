import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get('name');

    if (productName !== null) {
      this.product = this.productService.getProductByName(productName) || {
        name: 'Produit Inconnu',
        price: 0,
        image: 'assets/produit-inconnu.jpg',
        description: 'Description du produit inconnu.',
      };
    }
  }
}
