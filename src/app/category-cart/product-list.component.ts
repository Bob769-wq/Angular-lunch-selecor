import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
  <h3>Product List</h3>
  <ul>
  @for (product of products(); track product) {
  <app-product-item [product]="product" (add)="handleAdd(product)"></app-product-item>
  }
  </ul>
  `,
  styles: `h3 {
  color: #2a2a2a;
  font-size: 1.2rem;
  margin-bottom: .5rem;
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 4px;
}`
})

export class ProductListComponent {
  readonly products = input<{ name: string; price: number }[]>();
  readonly add = output<{ name: string; price: number }>();

  handleAdd(product: { name: string; price: number }) {
    this.add.emit(product);
  }
}