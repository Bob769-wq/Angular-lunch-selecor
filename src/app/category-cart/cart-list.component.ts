import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import {CartItemComponent} from "./cart-item.component"

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  template: `
  <h3>Cart Items</h3>

<ul>
  @for (item of items(); track item.name) {
  <app-cart-item [item]="item" (update)="handleUpdate($event)">
  </app-cart-item>
  }
</ul>
  `,
  styles: ``
})

export class CartListComponent {
  readonly items = input<{ name: string; price: number; quantity: number }[]>();
  readonly update = output<{ name: string; delta: number }>();

  handleUpdate(payload: { name: string; delta: number }) {
    this.update.emit(payload);
  }
}