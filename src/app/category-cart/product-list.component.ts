import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  readonly products = input<{ name: string; price: number }[]>();
  readonly add = output<{ name: string; price: number }>();

  handleAdd(product: { name: string; price: number }) {
    this.add.emit(product);
  }
}