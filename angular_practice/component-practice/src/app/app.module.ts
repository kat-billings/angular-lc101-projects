import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { InsideTaskListComponent } from './task-list/inside-task-list/inside-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    InsideTaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
