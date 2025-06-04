import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';

@Component({
  standalone: true,
  selector: 'app-category-cart',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './category-cart.component.html',
  styleUrls: ['./category-cart.component.css']
})

export class CategoryCartComponent {
  products = signal(['Rice Ball', 'Dumpling', 'Ramen']);

  addToCart(product: string) {
    this.cart.update(cart => [...cart, product]);
  }

  cart = signal<string[]>([]);
}