import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CartItem } from "./cart-store.service";
import { CommonModule } from "@angular/common";

@Component ({
    standalone:true,
    selector:'app-cart-item',
    imports:[CommonModule],
    template:`
    <li class="cart-item">
    {{item.name}} - $ {{item.price}} x {{item.quantity}} =
    $ {{item.price * item.quantity | number: '1.2-2'}}
    <button (click)="onDecrease()">-</button>
    <button (click)="onIncrease()">+</button>
    </li>
    `,
    styles:``, 
})

export class CartItemComponent {
    @Input () item! : CartItem;
    @Output () updateQuantity = new EventEmitter<number>();

    onIncrease() {
        this.updateQuantity.emit(1);
    }

    onDecrease() {
        this.updateQuantity.emit(-1);
    }
}