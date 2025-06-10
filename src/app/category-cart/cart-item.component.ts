import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  template: `
  <li class="cart-item">
  {{item().name}} - $ {{item().price}} X {{item().quantity}} =
  $ {{(item()!.price * item()!.quantity) | number: '1.2-2'}}
  <button (click)="subtract()">－</button>
  <button (click)="add()">＋</button>
  <button (click)="deleteItem()">🗑️</button>
  </li>
  `,
  styles: `
  .cart-item {
  display: flex;
  align-items: center;
  gap: 8px;
  }

button {
  padding: 2px 6px;
}
  `
})

export class CartItemComponent {
  readonly item = input.required<{ id: number; name: string; price: number; quantity: number }>();
  readonly update = output<{ name: string; delta: number }>();

  add() {
    this.update.emit({ name: this.item()!.name, delta: 1 });
  }

  subtract() {
    this.update.emit({ name: this.item()!.name, delta: -1 });
  }

  deleteItem() {
    this.update.emit({ name: this.item()!.name, delta: 0 });
  }
}
