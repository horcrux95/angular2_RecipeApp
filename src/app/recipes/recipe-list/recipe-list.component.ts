import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe }            from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes :Recipe[] = [
    new Recipe('Test Recipe1','very tasty recipe 111','../../../assets/images/Java.png'),
    new Recipe('Test Recipe2','very tasty recipe 222','../../../assets/images/Java.png'),
    new Recipe('Test Recipe3','very tasty recipe 333','../../../assets/images/Java.png')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    console.log("wasRecipeSelected");
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
