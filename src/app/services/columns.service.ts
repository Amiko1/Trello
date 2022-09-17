import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {

  base_url = environment.base_url
  columns = new Subject();
  casheColumns;

  constructor(private http: HttpClient) { }

  createColumn(boardId, title, order: 1) {
    this.casheColumns.push({ title, order })
    this.columns.next(this.casheColumns)
    return this.http.post(`${this.base_url}/boards/${boardId}/columns`, { title, order })
  }

  getColumns(boardId) {
    this.http.get(`${this.base_url}/boards/${boardId}/columns`).subscribe(res => {
      this.casheColumns = res;
      this.columns.next(res)
    })
  }
}
