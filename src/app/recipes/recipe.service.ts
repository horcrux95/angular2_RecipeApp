import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes :Recipe[] = [
        new Recipe('Test Recipe1','very tasty recipe 111','../../../assets/images/Java.png'),
        new Recipe('Test Recipe2','very tasty recipe 222','../../../assets/images/Java.png'),
        new Recipe('Test Recipe3','very tasty recipe 333','../../../assets/images/Java.png')
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    }