import { Component, signal } from '@angular/core';
import { CategoryItemComponent } from './category-item.component'
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-exclusive',
  imports: [CommonModule, CategoryItemComponent],
  template: `
  <h2>Category List (expand one only)</h2>
  @for (cat of categories(); track cat.id) {
  <app-category-item [category]="cat" [expanded]="expandedCategory()===cat.name"
  (toggle)="toggleCategory(cat.name)"></app-category-item>
  }
  `,
  styles: ``
})

export class CategoryExclusiveComponent {
  categories = signal([
    { id:1, name: 'main', items: ['rice', 'noodle', 'dumpling'] },
    { id:2, name: 'drinks', items: ['tea', 'coffee', 'milk'] },
    { id:3, name: 'desserts', items: ['cake', 'pudding', 'ice-cream'] }
  ]);

  expandedCategory = signal<string | null>(null);

  toggleCategory = (name: string) => {
    this.expandedCategory.update(current =>
      current === name ? null : name
    );
  };

}