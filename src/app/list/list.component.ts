import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  title = 'todo-list';
  taskService: TaskService;

  constructor(taskService: TaskService){
    this.taskService = taskService;
  }
  @Input()
  tasks!:Task[];

  delete(task: Task){
    this.taskService.deleteTask(task);
  }
  isDone(task: Task){
    this.taskService.changeTaskIsDone(task);
    console.log(task.isDone);
  }
  deleteCompleted(){
    this.taskService.deleteCompletedTasks();
  }
}

