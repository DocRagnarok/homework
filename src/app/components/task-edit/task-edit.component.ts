import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.taskForm = this.formBuilder.group({
      _id: [''],
      thing: [''],
      date: [''],
      time: [''],
      description: [''],
    });
  }
  tasks: any[] = [];
  index: any[] = [];
  x: any;
  ngOnInit(): void {
    this.route.params.subscribe((result) => console.log(result));
    this.tasks = this.taskService.alltask;
    this.x = this.route.snapshot.paramMap.get('index');
    console.log(this.x);
    this.taskForm.patchValue(this.tasks[parseInt(this.x as string)]);
    console.log(this.tasks);
  }
  onEdit(): any {
    //this.taskService.edit(this.x, this.taskForm.value);

    console.log(this.taskForm);
    this.taskService
      .updateTask(this.taskForm.value)
      .subscribe((result) => result);
    this.router.navigateByUrl('/tasklist');
  }
}
