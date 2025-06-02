import { Component, input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-category-item',
  imports: [CommonModule],
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})

export class CategoryItemComponent {
  readonly category = input<{ name: string; items: string[] }>();
  readonly expanded = input<boolean>();
  @Output() toggle = new EventEmitter<void>();
}