import { Component, OnInit } from '@angular/core';
import { BoardServices } from '../services/boards.service';
import { ModalService } from '../services/modal.service';
import { Board } from './boards.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponentt implements OnInit {

  constructor(private modalService: ModalService, private boardService: BoardServices, private authService: AuthService) { }

  boards: Board[] = [];

  ngOnInit() {
    this.boardService.getAllBoards(this.authService.user.value.login)
    this.boardService.boards.subscribe((board) => {
      this.boards = board
      console.log(this.boards)
    })
  }

  openModal() {
    this.modalService.toggleModal('addBoard')
  }


}
