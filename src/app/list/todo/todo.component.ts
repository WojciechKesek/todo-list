import { Component, Input } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  isEdit = false;
  newTask = '';

  @Input()
  task!: Task;
  delete(task: Task){
    this.taskService.deleteTask(task);
  }
  isDone(task: Task){
    this.taskService.changeTaskIsDone(task);
    console.log(task.isDone);
  }
  changeTask(task: Task){
    this.taskService.changeTask(task, this.newTask);
    this.isEdit = false;
  }
}
