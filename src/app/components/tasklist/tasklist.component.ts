import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  }
  onEdit() {}
}
