import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, ItemListComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  @Input() categories: { name: string; items: string[] }[] = [];
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