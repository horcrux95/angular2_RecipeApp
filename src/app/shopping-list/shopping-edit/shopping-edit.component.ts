import { Output,EventEmitter,Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<{name:string,amount:number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmt  = this.amountInputRef.nativeElement.value;
      const ing : Ingredient = new  Ingredient(ingName,ingAmt);

      this.ingredientAdded.emit(ing);
  }

}
