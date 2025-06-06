import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  @Input() product!: { name: string; price: number };
  @Output() add = new EventEmitter<{ name: string; price: number }>();

  handleClick() {
    this.add.emit(this.product);
  }
}