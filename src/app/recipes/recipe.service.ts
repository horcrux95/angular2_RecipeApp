import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "app/shared/ingredients.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes :Recipe[] = [
        new Recipe('Test Recipe1',
        'very tasty recipe 111',
        '../../../assets/images/Java.png',
        [ new Ingredient("Apple",1),new Ingredient("Cake",2)]),

        new Recipe('Test Recipe2',
        'very tasty recipe 222',
        '../../../assets/images/Java.png',
        [ new Ingredient("Honey",1),new Ingredient("Salt",4)]),

        new Recipe('Test Recipe3',
        'very tasty recipe 333',
        '../../../assets/images/Java.png',
        [ new Ingredient("Water",3),new Ingredient("pepper",6)])
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    }