import { Component } from '@angular/core';
import { MenuItem } from './menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  menu: MenuItem[] = [
   
    {
      Item: "Pepperoni Pizza",
      Category: "Pizza",
      Price: 15
    },
    {
      Item: "Pineapple Pizza (crowd favorite)",
      Category: "Pizza",
      Price: 13.50
    },
    {
      Item: "Cheese Pizza",
      Category: "Pizza",
      Price: 12
    },
    {
      Item: "Wings",
      Category: "Side",
      Price: 6.50
    },
    {
      Item: "Salad",
      Category: "Side",
      Price: 4.49
    },
    {
      Item: "Cookies",
      Category: "Dessert",
      Price: 3
    },
    {
      Item: "Cinnamon Sticks",
      Category: "Dessert",
      Price: 7
    }
  ]
}
