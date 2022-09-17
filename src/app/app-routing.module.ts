import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import { BoardsComponentt } from './boards/boards.component';
import { ColumnComponent } from './boards/column/column.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    component: EntranceComponent
  },
  {
    path: 'boards',
    canActivate:[AuthGuard],
    component: BoardsComponentt
  },
  {
    path: 'boards/:id/column',
    canActivate:[AuthGuard],
    component: ColumnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
