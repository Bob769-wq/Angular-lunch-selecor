import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { CartListComponent } from './cart-list.component';

@Component({
  standalone: true,
  selector: 'app-category-cart',
  imports: [CommonModule, ProductListComponent, CartListComponent],
  templateUrl: './category-cart.component.html',
  styleUrls: ['./category-cart.component.css']
})

export class CategoryCartComponent {
  products = signal(['Rice Ball', 'Dumpling', 'Ramen']);

  cart = signal<{ name: string; quantity: number }[]>([]);

  totalCount = computed(() =>
    this.cart().reduce((sum, item) => sum + item.quantity, 0)
  );

  addToCart(product: string) {
    this.cart.update(cart => {
      const existing = cart.find(item => item.name === product);
      if (existing) {
        return cart.map(item =>
          item.name === product ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cart, { name: product, quantity: 1 }];
      }
    });
  }

  handleQuantityChange(event: { name: string; delta: number }) {
    this.cart.update(cart => {
      if (event.delta === 0) {
        return cart.filter(item => item.name !== event.name);
      }

      return cart.map(item =>
        item.name === event.name
          ? { ...item, quantity: item.quantity + event.delta }
          : item
      )
        .filter(item => item.quantity > 0);
    })
  }
}