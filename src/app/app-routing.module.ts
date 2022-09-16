import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import { BoardsComponentt } from './boards/boards.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
