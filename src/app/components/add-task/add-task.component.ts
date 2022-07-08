import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(public FormBuilder: FormBuilder, private router: Router) {
    this.taskForm = this.FormBuilder.group({
      thing: [''],
      time: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}
  onSumit(): any {}
}
