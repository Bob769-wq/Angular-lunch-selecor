import { bootstrapApplication } from '@angular/platform-browser';
import { CategoryExclusiveComponent } from './app/category-exclusive/category-exclusive.component';
import { CategoryCartComponent } from './app/category-cart/category-cart.component'

bootstrapApplication(CategoryCartComponent)
  .catch((err) => console.error(err));
