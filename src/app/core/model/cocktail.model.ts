export interface CocktailList {
  drinks: Cocktail[];
}

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strCategory: string;
  strGlass: string;
  strInstructions: string;
}
