import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get('name');

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
