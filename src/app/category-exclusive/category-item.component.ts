import { Component, input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-category-item',
  imports: [CommonModule],
  template: `
  <h3 (click)="toggle.emit()">
  {{category().name}} ({{expanded()? 'expand': 'collapse'}})
  </h3>

  @if (expanded()) {
  <div>
  <ul>
    @for (item of category().items; track item) {
    <li>{{item}}</li>
    }
  </ul>
  </div>
  }
  `,
  styles: `
  h3 {
  cursor: pointer;
  user-select: none;
  padding: .5rem;
  background-color: #f2f2f2;
  margin: 0;
  }

  h3:hover {
  background-color: #e0e0e0;
  }

  ul {
  margin: 0;
  padding-left: 1.5rem;
  }

  li {
  line-height: 1.5;
  }
  `
})

export class CategoryItemComponent {
  readonly category = input.required<{ id:number; name: string; items: string[] }>();
  readonly expanded = input.required<boolean>();
  @Output() toggle = new EventEmitter<void>();
}