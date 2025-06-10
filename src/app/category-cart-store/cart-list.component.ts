import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartItem } from "./cart-store.service";
import { CartItemComponent } from "./cart-item.component";

@Component ({
    standalone:true,
    selector:'app-cart-list',
    imports:[CommonModule,CartItemComponent],
    template:`
    <ul>
    @for (item of items; track item.id) {
        <app-cart-item [item]="item" (updateQuantity)="onUpdate(item.name, $event)">
        </app-cart-item>
    }
    </ul>
    `,
    styles:``
})

export class CartListComponent {
    @Input() items: CartItem[]= [];
    @Output() updateQuantity = new EventEmitter<{name:string; delta:number}>();

    onUpdate(name:string, delta:number) {
        this.updateQuantity.emit({name,delta});
    }
}