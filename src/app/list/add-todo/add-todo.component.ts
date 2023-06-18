import { Component, Input } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  taskService: TaskService;
  constructor(taskService: TaskService){
    this.taskService = taskService;
  }
  newTask = '';

  @Input()
  tasks!:Task[];

  addTask(){
    this.taskService.addNewTask(this.newTask);
    this.newTask="";
  }

}
