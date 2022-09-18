import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ModalService } from 'src/app/services/modal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ColumnsService } from 'src/app/services/columns.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  constructor(private tasksService: TasksService, private modal: ModalService, private route: ActivatedRoute, private columnService: ColumnsService) { }

  boardsId: String;

  ngOnInit(): void {
    this.boardsId = this.route.snapshot.params['boardsId']
    this.getColumns()
  }

  columns;

  drop(event: CdkDragDrop<string[]>) {

    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.updateColumnSet()
  }
  openModal() {
    this.modal.toggleModal('addColumn')
  }

  openTaskModal(columnId) {
    this.modal.toggleModal('addTasks')
    this.modal.temp.next(columnId)
  }


  getColumns() {
    this.columnService.getColumns(this.boardsId)
    this.columnService.columns.subscribe((col: { title: string, _id: string, order: string, boardId: string }[]) => {
     
      if(col) {
        this.columns = col.sort((a, b) => (a.order > b.order) ? 1 : -1)
      }

    })
  }


  updateColumnSet() {
    const updatedColumns = this.columns.map((col, index) => {
      col.order = ++index;
      return {
        order: col.order,
        _id: col._id
      }
    })
    this.columnService.updateColumnSet(updatedColumns)

  }


}
