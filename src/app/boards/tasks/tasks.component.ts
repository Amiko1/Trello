import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() boardId;
  @Input() columnId;
  tasks;
  task;
  base_url = environment.base_url

  constructor(private http: HttpClient ,private taskService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
    this.taskService.tasks.subscribe(res => {
      if(res) {
        if(res.columnId === this.columnId) {
          this.tasks.push(res)
        }
      }
    })
  }

  getTasks() {

    this.taskService.getTasks(this.boardId, this.columnId).subscribe(res => this.tasks = res)
    
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
