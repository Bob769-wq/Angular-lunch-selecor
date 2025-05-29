import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from "./components/category-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CategoryListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly categories = [
    {
      name: 'Japanese',
      items: ['sushi', 'ramen', 'tenppura']
    },
    {
      name: 'American',
      items: ['hamburger', 'fried chicken', 'fries']
    },
    {
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
