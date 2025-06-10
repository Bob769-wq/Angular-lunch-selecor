import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule],
  template: `
  <div class="item-list">
  @for (item of items; track $index) {
  <button class="item-btn" [class.selected]="isSelected(item)" (click)="onSelect(item)">{{item}}
  </button>
  }
  </div>
  `,
  styles: `
  .item-list {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  }

  .item-btn {
  padding: .5rem 1rem;
  border: 1px solid #aaa;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 6px;
  transition: all .2s ease;
  }

  .item-btn:hover {
  background-color: #e0e0e0;
  }

  .item-btn.selected {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
  }
  `
})
export class ItemListComponent {
  @Input() items: string[] = [];
  @Input() selectedItem: string | null = null;
  @Input() onSelect: (item: string) => void = () => { };

  isSelected(item: string): boolean {
    return this.selectedItem === item;
  }
}
