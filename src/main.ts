import { bootstrapApplication } from '@angular/platform-browser';
import { CategoryExclusiveComponent } from './app/category-exclusive/category-exclusive.component';
import { CategoryCartComponent } from './app/category-cart/category-cart.component'
import { CategoryCartStoreComponent } from './app/category-cart-store/category-cart-store.component';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
