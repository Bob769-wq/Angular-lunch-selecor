import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-product-item',
  imports: [CommonModule],
  template: `
  <li (click)="handleClick()" class="item">{{product.name}} - {{product.price | currency:'USD'}}</li>
  `,
  styles: `
  .item {
  cursor: pointer;
  padding: 4px;
  transition: background .2s;
}

.item:hover {
  background-color: #f0f0f0;
}
  `
})

export class ProductItemComponent {
  @Input() product!: { name: string; price: number };
  @Output() add = new EventEmitter<{ name: string; price: number }>();

  handleClick() {
    this.add.emit(this.product);
  }
}