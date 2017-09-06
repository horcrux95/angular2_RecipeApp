import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 @Output() featureLoaded= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  
  onselect(feature){
    this.featureLoaded.emit(feature);
  }

}
