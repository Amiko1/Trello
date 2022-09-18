import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  base_url = environment.base_url

  tasks = new BehaviorSubject(null);
  

  constructor(private http: HttpClient) { }

  createTasks(task: {boardId: string, columnId: string, title: string, description: string, users: string[], userId: string, order: number}) {

    const {boardId, columnId, title, description, users, userId, order} = task;
    
    return this.http.post(`${this.base_url}/boards/${boardId}/columns/${columnId}/tasks`, {
      title,
      order,
      description,
      userId,
      users
    })
  }

  getTasks(boardId, columnId) {
   return this.http.get<[]>(`${this.base_url}/boards/${boardId}/columns/${columnId}/tasks`);
  }
}
