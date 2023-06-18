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
  public taskService: TaskService;

  constructor(taskService: TaskService){
    this.taskService = taskService;
  }

  @Input()
  tasks!: Task[];
  
  deleteCompleted(){
    this.taskService.deleteCompletedTasks();
  }
}

