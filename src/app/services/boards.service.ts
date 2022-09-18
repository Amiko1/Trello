import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject,  } from 'rxjs';
import { take } from 'rxjs/operators';

import { Board } from '../boards/boards.model';
@Injectable({
  providedIn: 'root'
})
export class BoardServices {

  boards = new BehaviorSubject<any>([]);
  casheBoards = [];
  base_url = environment.base_url
  constructor(private http: HttpClient) { }

  getAllBoards(id) {
    this.http.get<Board[]>(`${this.base_url}/boardsSet/${id}`,

    ).pipe(take(1)).subscribe(boards => {
      this.boards.next(boards)
    });
  }

  takeUsersLogins() {
    return this.http.get(`${this.base_url}/users`)
  }

  createBoard(title: string, owner: string, users: string[] | []) {
    const board = { title, owner, users }
    
    return this.http.post(`${this.base_url}/boards`, board)
  }

}
