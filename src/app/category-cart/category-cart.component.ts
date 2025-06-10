import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { CartListComponent } from './cart-list.component';

@Component({
  standalone: true,
  selector: 'app-category-cart',
  imports: [CommonModule, ProductListComponent, CartListComponent],
  template: `
  <h2>Category Cart Root</h2>
  <app-product-list [products]="products()" (add)="addToCart($event)"></app-product-list>

  <h3>Cart Items (Total: {{totalCount()}})</h3>

  @if (cart().length === 0) {
  <p>Your cart is empty.</p>
  } @else {
  <app-cart-list [items]="cart()" (update)="handleQuantityChange($event)">
  </app-cart-list>
  <p>Total Price: {{ totalPrice() | currency:'USD'}}</p>
  <button (click)="clearCart()">Clear Cart</button>
}
  `,
  styles: `
  h2 {
  color: #2c3e50;
}
  `
})

export class CategoryCartComponent {
  products = signal([
    { name: 'Rice Ball', price: 30 },
    { name: 'Dumpling', price: 50 },
    { name: 'Ramen', price: 80 }
  ]);

  cart = signal<{ name: string; price: number; quantity: number }[]>([]);

  totalCount = computed(() =>
    this.cart().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  addToCart(product: { name: string; price: number }) {
    this.cart.update(cart => {
      const existing = cart.find(item => item.name === product.name);
      if (existing) {
        return cart.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cart, { ...product, quantity: 1 }];
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
    });
  }

  clearCart() {
    this.cart.set([]);
  }
}