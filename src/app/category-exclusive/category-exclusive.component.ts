import { Component, signal } from '@angular/core';
import { CategoryItemComponent } from './category-item.component'
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-exclusive',
  imports: [CommonModule, CategoryItemComponent],
  templateUrl: './category-exclusive.component.html',
  styleUrls: ['./category-exclusive.component.css']
})

export class CategoryExclusiveComponent {
  categories = signal([
    { name: 'main', items: ['rice', 'noodle', 'dumpling'] },
    { name: 'drinks', items: ['tea', 'coffee', 'milk'] },
    { name: 'desserts', items: ['cake', 'pudding', 'ice-cream'] }
  ]);

  expandedCategory = signal<string | null>(null);

  toggleCategory = (name: string) => {
    this.expandedCategory.update(current =>
      current === name ? null : name
    );
  };

}