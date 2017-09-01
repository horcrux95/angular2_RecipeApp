import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  featureLoaded : string ='recipe';

  onNavigate(feature){
    this.featureLoaded=feature;
  }
}
