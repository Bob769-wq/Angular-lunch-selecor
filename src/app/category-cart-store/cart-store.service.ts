import { Injectable, signal} from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartStoreService {
  private _cart = signal<CartItem[]>([]);

  readonly cart = this._cart;

  addToCart(product: { name: string; price: number }) {
    this._cart.update(cart => {
      const existing = cart.find(item => item.name === product.name);
      if (existing) {
        return cart.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...cart, { ...product, quantity: 1 }];
    });
  }

  updateQuantity(name: string, delta: number) {
    this._cart.update(cart => {
      return cart.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + delta } : item
      )
        .filter(item => item.quantity > 0);
    });
  }

  clearCart() {
    this._cart.set([]);
  }
}