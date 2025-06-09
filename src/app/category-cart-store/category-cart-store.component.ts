import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStoreService, CartItem } from './cart-store.service';
import { CartListComponent } from './cart-list.component';

@Component({
  standalone: true,
  selector: 'app-category-cart-store',
  imports: [CommonModule, CartListComponent],
  templateUrl: './category-cart-store.component.html',
  styleUrls: ['./category-cart-store.component.css']
})

export class CategoryCartStoreComponent {
  products = [
    { name: 'Rice Ball', price: 30 },
    { name: 'Dumpling', price: 50 },
    { name: 'Ramen', price: 80 }
  ];

  constructor(public cartStore: CartStoreService) { }

  totalCount = computed(() =>
    this.cartStore.cart().reduce((sum, item) => sum + item.quantity, 0));

  totalPrice = computed(() =>
    this.cartStore.cart().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  addProduct(product: { name: string; price: number }) {
    this.cartStore.addToCart(product);
  }

  updateQuantity(name: string, delta: number) {
    this.cartStore.updateQuantity(name, delta);
  }

  clearCart() {
    this.cartStore.clearCart();
  }
}