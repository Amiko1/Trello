import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    component: EntranceComponent
  },
  {
    path: 'tasks',
    canActivate:[AuthGuard],
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
