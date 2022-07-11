import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
export class Task {
  _index!: String;
  thing!: String;
  time!: String;
  description!: String;
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  alltask: any[] = [];
  add(taskValue: any) {
    this.alltask.push(taskValue);
  }
  edit(x: number, taskEdit: any) {
    this.alltask[x] = taskEdit;
  }
  delete(i: number) {
    this.alltask.splice(i, 1);
  }
  // heroService idea
  // edit(index: number, taskForm: any) {
  //   this.alltask.push(taskForm);
  // }
  // delete(index: number) {
  //   this.alltask.push(index);
  // }

  // Node Express Api

  // Http header ?? ke rai wa
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}
  //test in local 3001 create from node-backend
  // configUrl = 'http://localhost:3001/api/people';
  // getConfig() {
  //   return this.httpClient.get(this.configUrl);
  // }
  //
  mongodbUrl = 'http://localhost:3001/api/task';

  saveTask(data: any) {
    return this.httpClient.post(this.mongodbUrl, data);
  }
  getTask() {
    return this.httpClient.get(this.mongodbUrl);
  }
  deleteTask(data: any) {
    console.log(data);
    return this.httpClient.delete(this.mongodbUrl + '/' + data._id);
  }
  updateTask(data: any) {
    return this.httpClient.put(this.mongodbUrl, data);
  }
}
