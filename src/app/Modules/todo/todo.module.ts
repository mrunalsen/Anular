import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    DragDropModule
  ]
})
export class TodoModule { }