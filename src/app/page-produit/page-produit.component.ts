import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css'],
})
export class PageProduitComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
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
