import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private taskService: TaskService
  ) {
    this.taskForm = this.formBuilder.group({
      thing: [''],
      date: [''],
      time: [''],
      description: [''],
    });
  }
  getTaskFromData(data: any) {
    console.warn(data);
    this.taskService.saveTask(data).subscribe((result) => {
      console.warn(result);
    });
  }

  ngOnInit(): void {}
  onSumit(): any {
    console.log(this.taskForm.value);
    this.taskService.add(this.taskForm.value);
    this.router.navigateByUrl('/tasklist');
  }
}
