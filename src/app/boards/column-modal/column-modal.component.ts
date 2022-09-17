import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ColumnsService } from 'src/app/services/columns.service';
@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.css']
})
export class ColumnModalComponent implements OnInit, OnDestroy {

  columnTitle: string = '';

  showAlert = false
  alertMsg = 'Please wait! Boards is adding'
  alertColor = 'blue'

  @Input() boardsId;

  constructor(private modal: ModalService, private route: ActivatedRoute, private columService: ColumnsService) { }

  ngOnInit(): void {
    this.modal.register('addColumn')
     
  }

  ngOnDestroy() {
    this.modal.unregister('addColumn')
  }

  createColumn() {
      this.columService.createColumn(this.boardsId, this.columnTitle, 1).subscribe(res => console.log(res))
      this.modal.toggleModal('addColumn')
  }

}
