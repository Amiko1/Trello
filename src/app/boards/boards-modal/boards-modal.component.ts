import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-boards-modal',
  templateUrl: './boards-modal.component.html',
  styleUrls: ['./boards-modal.component.css'],
})
export class BoardsModalComponent implements OnInit, OnDestroy {

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.modal.register('addBoard')
  }

  ngOnDestroy() {
    this.modal.unregister('addBoard')
  }

}
