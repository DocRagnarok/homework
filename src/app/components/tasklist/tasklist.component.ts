import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {
  constructor(private taskService: TaskService, private router: Router) {}
  tasks: any[] = [];
  ngOnInit(): void {
    this.tasks = this.taskService.alltask;
    this.taskService.getTask().subscribe((result) => {
      this.tasks = result as any;
      this.taskService.alltask = result as any;
    });

    //this.taskService.getConfig().subscribe((result) => console.log(result)); // doo api from local 3001 test
  }
  onEdit() {}
  onDelete(i: number) {
    //this.taskService.delete(i);

    this.taskService.deleteTask(this.tasks[i]).subscribe((result) => {
      this.tasks.splice(i, 1);
    });
  }
}
