import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatSelectModule } from '@angular/material/select'
import { SharedModule } from '../shared/shared.module';
import { BoardsModalComponent } from './boards-modal/boards-modal.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [
    BoardsModalComponent,
    CreateBoardComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    RouterModule
  ],
  exports: [
    BoardsModalComponent
  ]
})
export class BoardsModule { }
