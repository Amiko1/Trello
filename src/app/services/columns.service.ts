import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {

  base_url = environment.base_url
  columns = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  createColumn(boardId, title, order: 1) {
    
    return this.http.post(`${this.base_url}/boards/${boardId}/columns`, { title, order })
  }

  getColumns(boardId) {
    this.http.get<[]>(`${this.base_url}/boards/${boardId}/columns`).pipe(take(1)).subscribe(res => {
     
      this.columns.next(res)
      
    })
  }

  updateColumnSet(updatedColumns) {
    return this.http.patch(`${this.base_url}/columnsSet`, updatedColumns)
  }
}
