import { Routes } from '@angular/router';
import { CocktailListComponent } from './children/cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './children/cocktail-detail/cocktail-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: CocktailListComponent,
  },
  {
    path: ':id',
    component: CocktailDetailComponent,
  },
];
