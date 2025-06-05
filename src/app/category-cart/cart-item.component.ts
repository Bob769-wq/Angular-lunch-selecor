import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  readonly item = input<{ name: string; quantity: number }>();
  readonly update = output<{ name: string; delta: number }>();

  add() {
    this.update.emit({ name: this.item()!.name, delta: 1 });
  }

  subtract() {
    this.update.emit({ name: this.item()!.name, delta: -1 });
  }
}
