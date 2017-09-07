import { Ingredient } from "app/shared/ingredients.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

ingredientsChanged = new EventEmitter<Ingredient[]>();
private ingredients: Ingredient[] = [
        new Ingredient('apple',5),
        new Ingredient('orange',2)
      ];

getIngredients(){
    return this.ingredients.slice();
}

addIngredient(ingredient :Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
}
addIngredients(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
}
}