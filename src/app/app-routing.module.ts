import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import { TasksComponent } from './tasks/tasks.component';
const routes: Routes = [
  {
    path: '',
    component: EntranceComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
