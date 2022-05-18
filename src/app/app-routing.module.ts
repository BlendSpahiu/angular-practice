import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'new-task',
    component: NewTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
