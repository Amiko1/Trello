import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Board } from './boards.model';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponentt  {

  constructor(private modalService: ModalService ) {}

  boards: Board[] = [
    new Board(1, "Math"),
    new Board(2, "SAX")
  ]


  openModal() {
    this.modalService.toggleModal('addBoard')
  }
 


}
