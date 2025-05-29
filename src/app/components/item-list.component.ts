import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() items: string[] = [];
  @Input() selectedItem: string | null = null;
  @Input() onSelect: (item: string) => void = () => { };

  isSelected(item: string): boolean {
    return this.selectedItem === item;
  }
}
