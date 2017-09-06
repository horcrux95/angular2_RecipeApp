import { Output,EventEmitter,Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
 // styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmt  = this.amountInputRef.nativeElement.value;
      const ing : Ingredient = new  Ingredient(ingName,ingAmt);
      this.slService.addIngredient(ing);

  }

}
