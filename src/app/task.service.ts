import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { taskName: 'Task1', isDone: false },
    { taskName: 'Task2', isDone: false },
    { taskName: 'Task3', isDone: false }
  ];
  constructor() {}

  addNewTask(newTask: string){
    this.tasks.push({taskName: newTask, isDone: false});
  }
  deleteTask(task:Task){
    this.tasks = this.tasks.filter(p => p !== task);
  }
  deleteCompletedTasks(){
    this.tasks = this.tasks.filter(p => p.isDone !== true);
  }
  changeTaskIsDone(task: Task){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i] === task){
        this.tasks[i].isDone = !this.tasks[i].isDone
      }
    }
  }
  changeTask(task: Task, newTask: string){
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i] === task){
        this.tasks[i].taskName = newTask;
      }
    }  
  }
  
}
