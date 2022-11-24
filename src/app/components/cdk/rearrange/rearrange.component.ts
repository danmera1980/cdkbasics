import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rearrange',
  templateUrl: './rearrange.component.html',
  styleUrls: ['./rearrange.component.css']
})
export class RearrangeComponent implements OnInit {

  products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
  ]

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }

}
