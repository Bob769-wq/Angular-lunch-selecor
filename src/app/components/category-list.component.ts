import { Component, Input, input } from '@angular/core';
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
}
