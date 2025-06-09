import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartItem } from "./cart-store.service";
import { CartItemComponent } from "./cart-item.component";

@Component ({
    standalone:true,
    selector:'app-cart-list',
    imports:[CommonModule,CartItemComponent],
    templateUrl:'./cart-list.component.html',
    styleUrls:['./cart-list.component.css']
})

export class CartListComponent {
    @Input() items: CartItem[]= [];
    @Output() updateQuantity = new EventEmitter<{name:string; delta:number}>();

    onUpdate(name:string, delta:number) {
        this.updateQuantity.emit({name,delta});
    }
}