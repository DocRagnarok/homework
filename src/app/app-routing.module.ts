import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tasklist' },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:index', component: TaskEditComponent },
  { path: 'tasklist', component: TasklistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
