import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BoardServices } from 'src/app/services/boards.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  userLogins: string[];
  boardTitle: string = '';
  selectedUserLogins: string[] = [];

  showAlert = false
  alertMsg = 'Please wait! Boards is adding'
  alertColor = 'blue'


  constructor(private boardsService: BoardServices, private authService: AuthService, private modalService: ModalService) { }



  ngOnInit(): void {
    this.boardsService.takeUsersLogins().subscribe((users: { name: string, login: string, _id: string }[]) => {
      this.userLogins = users.map(res => res.login)
    })
  }


  removeUser(user) {
    this.selectedUserLogins = this.selectedUserLogins.filter(login => login !== user)
    this.userLogins.push(user)
  }

  onUserClick(event) {
    const value = event.target.value
    this.selectedUserLogins.push(value)

    this.userLogins = this.userLogins.filter(login => login !== value)
  }

  createBoard() {
    this.showAlert = true;
    const owner = this.authService.user.value.login;
    this.boardsService.createBoard(this.boardTitle, owner, this.selectedUserLogins).subscribe((res) => {
      let placeHolder = [...this.boardsService.boards.value, res];
      this.boardsService.boards.next(placeHolder)
      this.showAlert = false
      this.modalService.toggleModal('addBoard')
    }, (error) => [
      this.alertMsg = 'something went wrong try again'
    ])


  }

}
