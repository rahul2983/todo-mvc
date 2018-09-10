import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  item: string;
  items: Array<string>;
  // editMode: boolean;
  editMode: Array<boolean>;

  constructor() { }

  ngOnInit() {
    this.item = '';
    this.items = [];
    // this.editMode = false;
    this.editMode = [];
  }

  onKey(itemValue: string) {
    this.item = itemValue;
    console.log(this.item);
  }

  addItem(value: string) {
    this.item = value;
    if (this.item !== '') {
      this.items.push(this.item);
      this.editMode.push(false);
    }
    
    console.log(this.items);
    console.log(this.editMode);
  }

  editItem(value: string, index: number) {
    this.item = value;
    this.editMode[index] = true;
    console.log("Edit the Item: " + this.item);
  }

  saveItem(value: string, index: number) {
    console.log("Save the Item: " + value);
    console.log("Index " + index);
    this.items[index] = value;
    this.editMode[index] = false;
  }

}
