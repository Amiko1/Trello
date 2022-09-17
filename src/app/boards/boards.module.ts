import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select'
import { SharedModule } from '../shared/shared.module';
import { BoardsModalComponent } from './boards-modal/boards-modal.component';
import { CreateBoardComponent } from './create-board/create-board.component';

@NgModule({
  declarations: [
    BoardsModalComponent,
    CreateBoardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    BoardsModalComponent
  ]
})
export class BoardsModule { }
