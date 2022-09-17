import { Component,OnInit } from '@angular/core';
import { BoardServices } from '../services/boards.service';
import { ModalService } from '../services/modal.service';
import { Board } from './boards.model';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponentt implements OnInit {

  constructor(private modalService: ModalService, private boardService: BoardServices ) {}

  boards: Board[] = [];

  ngOnInit() {
    this.boardService.getAllBoards()
    this.boardService.boards.subscribe((board) => {
      this.boards = board
    })
  }

  openModal() {
    this.modalService.toggleModal('addBoard')
  }


}
