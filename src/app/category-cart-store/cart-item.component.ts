import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CartItem } from "./cart-store.service";
import { CommonModule } from "@angular/common";

@Component ({
    standalone:true,
    selector:'app-cart-item',
    imports:[CommonModule],
    templateUrl:'./cart-item.component.html',
    styleUrls:['./cart-item.component.css'], 
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