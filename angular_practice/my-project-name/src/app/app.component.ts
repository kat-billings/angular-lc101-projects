import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, World';
  name: string = 'Kat';
  itemList: string[] = ['drawing time', 'video game time', 'good food', 'sleep'];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
      return this.length * this.width;
    }
  }
}

