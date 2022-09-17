import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
    timePeriods = [
      'Bronze age',
      'Iron age',
      'Middle ages',
      'Early modern period',
      'Long nineteenth century',
    ];
  
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }

}
