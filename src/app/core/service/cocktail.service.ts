import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CocktailList } from '../model/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private _http: HttpClient) {}

  getCocktailList(): Observable<CocktailList> {
    return this._http.get<CocktailList>(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
    );
  }

  getCocktailDetail(id: string): Observable<CocktailList> {
    return this._http.get<CocktailList>(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
  }
}
