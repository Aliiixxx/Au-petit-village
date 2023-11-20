import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    {
      name: 'Figurine Astérix',
      price: 20,
      image: 'assets/figurine-asterix.jpg',
      description:
        'Figurine Astérix avec une taille de 10 cm et un poids de 100 g. Parfait pour les fans de la bande dessinée!',
    },
    {
      name: 'Figurine Obélix',
      price: 18,
      image: 'assets/figurine-obelix.jpg',
      description:
        'Figurine Obélix imposante avec une taille de 15 cm et un poids de 150 g. Livrée avec son menhir!',
    },
    {
      name: 'Figurine Idéfix',
      price: 15,
      image: 'assets/figurine-idefix.jpg',
      description:
        'Figurine Idéfix adorable et petit, mesure 5 cm et pèse seulement 50 g. Le compagnon idéal!',
    },
  ];

  getProducts() {
    return this.products;
  }

  getProductByName(productName: string) {
    return this.products.find((product) => product.name === productName);
  }
}
