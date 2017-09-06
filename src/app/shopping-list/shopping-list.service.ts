import { Ingredient } from "app/shared/ingredients.model";

export class ShoppingListService {

private ingredients: Ingredient[] = [
        new Ingredient('apple',5),
        new Ingredient('orange',2)
      ];

getIngredients(){
    return this.ingredients.slice();
}

addIngredient(ingredient :Ingredient){
    this.ingredients.push(ingredient);
}
}