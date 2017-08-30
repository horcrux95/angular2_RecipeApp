import { Component, OnInit } from '@angular/core';
import { Recipe }            from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :Recipe[] = [
    new Recipe('a test recipe','very tasty recipe must try','../../../assets/images/Java.png'),
    new Recipe('a test recipe','very tasty recipe must try','../../../assets/images/Java.png'),
    new Recipe('a test recipe','very tasty recipe must try','../../../assets/images/Java.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
