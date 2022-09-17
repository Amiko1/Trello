import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Board } from '../boards/boards.model';
@Injectable({
  providedIn: 'root'
})
export class BoardServices {

  boards = new Subject<Board[]>();
  casheBoards = [];
  base_url = environment.base_url
  constructor(private http: HttpClient) { }

  getAllBoards(id) {
    this.http.get<Board[]>(`${this.base_url}/boardsSet/${id}`,

    ).subscribe(boards => {
      this.boards.next(boards)
      console.log(boards)
      this.casheBoards = boards
    });
  }

  takeUsersLogins() {
    return this.http.get(`${this.base_url}/users`)
  }

  createBoard(title: string, owner: string, users: string[] | []) {
    const board = { title, owner, users }
    this.casheBoards.push(board)
    this.boards.next(this.casheBoards)
    return this.http.post(`${this.base_url}/boards`, board)
  }

}
