import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/interfaces/Task';
import { TaskService } from '../Services/Task/task.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private router: Router, private taskService: TaskService) {

  }
  tasks: Task[] = [];

  addTask(title: string, description: string, priority: number, duedate: Date) {
    this.taskService.addTask(title, description, priority, duedate).subscribe((response) => {

    },
      (error) => {
        // An error occurred
        console.error('Error adding task:', error);
      })
    this.router.navigate(['home'])
  }
}
