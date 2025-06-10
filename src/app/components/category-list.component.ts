import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, ItemListComponent],
  template:`
  @for (category of categories; track category.id) {
  <div class="category">
  <div class="category-header">
    <h2>{{category.name}}</h2>
    <button (click)="toggle(category.name)">
      {{isExpanded(category.name)? 'collapse':'expand'}}
    </button>

    @if (isExpanded(category.name)) {
    <app-item-list [items]="category.items" [selectedItem]="selectedItem" [onSelect]="onItemSelected"></app-item-list>
    }
  </div>
  </div>
  }
  `,
  styles: `
  .category {
  margin-bottom: 1.5rem;
  }

  .category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
  }

  .category h2 {
  margin: 0;
  color: #2b2b2b;
  font-size: 18px;
  }

  .category-header button {
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  transition: all .2s;
  }

  .category-header button:hover {
  background-color: #ccc;
  }
  `
})
export class CategoryListComponent {
  @Input() categories: { id: number; name: string; items: string[] }[] = [];
  @Input() selectedItem: string | null = null;
  @Input() onItemSelected: (item: string) => void = () => { };

  readonly expandedMap = signal<Record<string, boolean>>({});

  toggle(categoryName: string) {
    this.expandedMap.update((map) => ({
      ...map,
      [categoryName]: !map[categoryName]
    }));
  }

  isExpanded(categoryName: string): boolean {
    return this.expandedMap()[categoryName] ?? true;
  }
}