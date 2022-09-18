import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BoardServices } from 'src/app/services/boards.service';
import { TasksService } from 'src/app/services/tasks.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tasks-modal',
  templateUrl: './tasks-modal.component.html',
  styleUrls: ['./tasks-modal.component.css']
})
export class TasksModalComponent implements OnInit, OnDestroy {

  // columnTitle: string = '';
  @Input() boardsId;
  columnId;


  userLogins: string[];
  
  selectedUserLogins: string[] = [];

  showAlert = false
  alertMsg = 'Please wait! Boards is adding'
  alertColor = 'blue'

  constructor(private authService: AuthService, private modal: ModalService, private boardsService: BoardServices, private taskService: TasksService) { }

  title = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  

  createTaskForm = new FormGroup({
    title: this.title,
    description: this.description,
  })

  


  createTask() {
    this.modal.toggleModal("addTasks")
    this.showAlert = true
    this.alertMsg = 'Please wait! Task is creating'
    this.alertColor = 'blue'

    const { title, description } = this.createTaskForm.value
    const task = {
      boardId:this.boardsId, 
      columnId:this.columnId,
      title,
      description,
      users: this.selectedUserLogins,
      userId: this.authService.user.value.id,
      order: 1,
    }
    this.taskService.createTasks(task).subscribe(res => {
      
      this.taskService.tasks.next(res)
    
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

  ngOnInit(): void {
    this.modal.register('addTasks')
    this.boardsService.takeUsersLogins().subscribe((users: { name: string, login: string, _id: string }[]) => {
      this.userLogins = users.map(res => res.login)
    })

    this.modal.temp.subscribe(temp => this.columnId = temp)
     
  }

  ngOnDestroy() {
    this.modal.unregister('addTasks')
    
  }
  

}
