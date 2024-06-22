import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../core/service/cocktail.service';
import { Cocktail } from '../../core/model/cocktail.model';

@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
})
export class CocktailDetailComponent {
  cocktail: Cocktail | undefined;

  constructor(
    cocktailService: CocktailService,
    activatedRoute: ActivatedRoute,
  ) {
    const cocktailId = activatedRoute.snapshot.params['id'];

    cocktailService.getCocktailDetail(cocktailId).subscribe({
      next: (res) => {
        this.cocktail = res.drinks[0];
        console.log(this.cocktail);
      },
    });
  }
}
