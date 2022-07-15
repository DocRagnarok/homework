import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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
      thing: ['', [Validators.required, Validators.maxLength(60)]],
      date: [''],
      time: [''],
      description: ['', [Validators.required, Validators.maxLength(60)]],
    });
  }
  // getTaskFromData(data: any) {
  //   console.warn(data);
  //   this.taskService.saveTask(data).subscribe((result) => {
  //     console.warn(result);
  //   });
  // } first attempt

  ngOnInit(): void {
    console.log(this.taskForm.controls['thing']);
  }
  onSumit(): any {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      this.taskService.add(this.taskForm.value);
      this.taskService
        .saveTask(this.taskForm.value)
        .subscribe((result) => console.log(result));
      this.router.navigateByUrl('/tasklist');
    } else {
      alert('Insert all input');
    }
  }
}
