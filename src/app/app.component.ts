import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from "./components/category-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoryListComponent, CommonModule],
  template: `
  <h1>Lunch Selector</h1>
  <p>{{message()}}</p>

  <app-category-list [categories]="categories" [selectedItem]="selectedItem()"
  [onItemSelected]="onItemSelected"></app-category-list>
  `,
  styles:`
  h1 {
  font-size: 24px;
  margin-bottom: .5rem;
  }

p {
  font-weight: bold;
  color: #555;
  }
  `
})
export class AppComponent {
  readonly categories = [
    {
      id: 1,
      name: 'Japanese',
      items: ['sushi', 'ramen', 'tenppura']
    },
    {
      id: 2,
      name: 'American',
      items: ['hamburger', 'fried chicken', 'fries']
    },
    {
      id: 3,
      name: 'Italian',
      items: ['pizza', 'pasta', 'risotto']
    }
  ];

  selectedItem = signal<string | null>(null);

  message = computed(() => this.selectedItem() ? `You choose: ${this.selectedItem()}` : 'Please choose one');

  onItemSelected = (item: string) => {
    this.selectedItem.set(item);
  };
}
