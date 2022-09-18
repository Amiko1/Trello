import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatSelectModule } from '@angular/material/select'
import { SharedModule } from '../shared/shared.module';
import { BoardsModalComponent } from './boards-modal/boards-modal.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ColumnComponent } from './column/column.component';
import { ColumnModalComponent } from './column-modal/column-modal.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    BoardsModalComponent,
    CreateBoardComponent,
    ColumnComponent,
    ColumnModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    RouterModule,
    DragDropModule,
    ScrollingModule
  ],
  exports: [
    BoardsModalComponent,
    ColumnModalComponent
  ]
})
export class BoardsModule { }
