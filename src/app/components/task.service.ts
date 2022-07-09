import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  alltask: any[] = [];
  add(taskForm: any) {
    this.alltask.push(taskForm);
  }
  // edit(index: number, taskForm: any) {
  //   this.alltask.push(taskForm);
  // }
  // delete(index: number) {
  //   this.alltask.push(index);
  // }
  constructor() {}
}
