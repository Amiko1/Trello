import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ModalService } from 'src/app/services/modal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ColumnsService } from 'src/app/services/columns.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  constructor(private modal: ModalService, private route: ActivatedRoute, private columnService: ColumnsService) { }

  boardsId: String;

  ngOnInit(): void {
    this.boardsId = this.route.snapshot.params['boardsId']
    this.getColumns()
  }

  columns;

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
  openModal() {
    this.modal.toggleModal('addColumn')
  }

  getColumns() {
    this.columnService.getColumns(this.boardsId)
    this.columnService.columns.subscribe(res => {
      this.columns = res;
    })
  }

  drag(e) {
    console.log('HEY')
    if (e.target.type == "button") {
      console.log('HEY')
      e.preventDefault();
    }
  }

}
