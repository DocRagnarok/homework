import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RxjsTrainComponent } from './components/rxjs-train/rxjs-train.component';
import { TesterComponent } from './components/tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskEditComponent,
    TasklistComponent,
    RxjsTrainComponent,
    TesterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
