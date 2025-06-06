import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartItemComponent } from "./cart-item.component";

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent {
  readonly items = input<{ name: string; price: number; quantity: number }[]>();
  readonly update = output<{ name: string; delta: number }>();

  handleUpdate(payload: { name: string; delta: number }) {
    this.update.emit(payload);
  }
}