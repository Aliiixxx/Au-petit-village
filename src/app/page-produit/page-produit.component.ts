import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css']
})
export class PageProduitComponent {
  product: any;

  constructor(private route: ActivatedRoute) {
    const productName = this.route.snapshot.paramMap.get('name');

    if (productName) {
      const products = [
        { name: 'Figurine Astérix', price: 20, image: 'assets/figurine-asterix.jpg' },
        { name: 'Figurine Obélix', price: 18, image: 'assets/figurine-obelix.jpg' },
        { name: 'Figurine Idéfix', price: 15, image: 'assets/figurine-idefix.jpg' },
      ];

      this.product = products.find(product => product.name === productName);
      if (!this.product) {
        this.product = {
          name: 'Produit Inconnu',
          price: 0,
          image: 'assets/produit-inconnu.jpg',
        };
      }
    }
  }
}
