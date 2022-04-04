import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  //template: '<h3>Inline Html<h3>'
   templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'Coimbatore'
  total: number = 1000;
  hits: number = 50;

  onBoxValueChange(paramData: any)
  {
    console.log("app component: " + paramData.value);
  }
}