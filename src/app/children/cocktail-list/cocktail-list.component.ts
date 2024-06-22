import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from '../../core/service/cocktail.service';
import { CocktailList } from '../../core/model/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent {
  cocktails: CocktailList | undefined;

  constructor(
    private _router: Router,
    cocktailService: CocktailService,
  ) {
    cocktailService.getCocktailList().subscribe({
      next: (res) => {
        this.cocktails = res;
      },
    });
  }

  openCocktailDetail(id: string) {
    this._router.navigate([id]);
  }
}
