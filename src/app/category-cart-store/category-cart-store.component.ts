import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStoreService, CartItem } from './cart-store.service';
import { CartListComponent } from './cart-list.component';

@Component({
  standalone: true,
  selector: 'app-category-cart-store',
  imports: [CommonModule, CartListComponent],
  template:`
  <h2>Products</h2>
  <ul>
  @for (product of products; track product.id) {
  <li>{{product.name}} - $ {{product.price}}
    <button (click)="addProduct(product)">Add to Cart</button>
  </li>
  }
  </ul>

  <h2>Shopping Cart</h2>
  @if (cartStore.cart().length === 0) {
  <p>Your cart is empty.</p>
  }@else {
  <app-cart-list [items]="cartStore.cart()" (updateQuantity)="updateQuantity($event.name, $event.delta)">
  </app-cart-list>
  <p>Total Count: {{totalCount()}}</p>
  <p>Total Price: {{totalPrice() | currency:'USD'}}</p>
  <button (click)="clearCart()">Clear Cart</button>
  }
  `,
  styles: ``
})

export class CategoryCartStoreComponent {
  products = [
    { id: 1, name: 'Rice Ball', price: 30 },
    { id: 2, name: 'Dumpling', price: 50 },
    { id: 3, name: 'Ramen', price: 80 }
  ];

  readonly cartStore =inject(CartStoreService);

  totalCount = computed(() =>
    this.cartStore.cart().reduce((sum, item) => sum + item.quantity, 0));

  totalPrice = computed(() =>
    this.cartStore.cart().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  addProduct(product: { id: number; name: string; price: number }) {
    this.cartStore.addToCart(product);
  }

  updateQuantity(name: string, delta: number) {
    this.cartStore.updateQuantity(name, delta);
  }

  clearCart() {
    this.cartStore.clearCart();
  }
}