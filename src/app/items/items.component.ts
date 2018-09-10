import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  item: string;
  items: Array<string>;
  editMode: boolean;

  constructor() { }

  ngOnInit() {
    this.item = '';
    this.items = [];
    this.editMode = false;
  }

  onKey(itemValue: string) {
    this.item = itemValue;
    console.log(this.item);
  }

  addItem(value: string) {
    this.items.push(this.item);
    console.log(this.items);
  }

  editItem(value: string) {
    this.item = value;
    this.editMode = true;
    console.log("Edit the Item: " + this.item);
  }

  saveItem(value: string, index: number) {
    console.log("Save the Item: " + value);
    console.log("Index " + index);
    this.items[index] = value;
    this.editMode = false;
  }

}
