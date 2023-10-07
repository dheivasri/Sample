import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  sampleArr = [
    { id: 1, name: 'Samosa', image: window.origin +'/assets/images/samosa.jpg', price: 50, value: 0, showAddForm: false },
    { id: 2, name: 'Puff', image: window.origin + '/assets/images/puff.jpg', price: 50, value: 0, showAddForm: false },
    { id: 3, name: 'Lays', image: window.origin + '/assets/images/lays1.jpg', price: 50, value: 0, showAddForm: false },
    { id: 4, name: 'Pizza', image: window.origin + '/assets/images/pizza.jpg', price: 50, value: 0, showAddForm: false },
    { id: 5, name: 'Burger', image: window.origin + '/assets/images/burger1.jpg', price: 50, value: 0, showAddForm: false },
  ]

  /*showAddForm: boolean = false;
  value: number = 0;*/
  showAddForm: boolean = false;

  toggleAddForm(item: any) {
    item.showAddForm = !item.showAddForm;
  }

  handlePlus(item: any) {
      if (item.value < 0) {
          item.value = 0;
      }
    item.value++;

    if (item.value > 0) {
      item.showAddForm = true;
    }
  }

  handleMinus(item: any) {
    item.value--;
    // Hide plus and minus buttons when the value reaches 0
    if (item.value === 0) {
        item.showAddForm = false;
    }
}
constructor(){

  console.log(this.sampleArr);
}
}
