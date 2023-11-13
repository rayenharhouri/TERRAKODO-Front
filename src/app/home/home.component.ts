import { Component, OnInit } from '@angular/core';
import { Task } from 'src/interfaces/Task';
import { TaskService } from '../Services/Task/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  openTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  completedTasks: Task[] = [];
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {
    // Populate the task lists with example tasks
  }

  ngOnInit() {
    this.getAllTasks()
  }

  editTask(id: string) {
    // Implement the logic to handle editing the task
    console.log('Editing task:');
    this.router.navigate(['editTask', id])
  }

  deleteTask(id: string) {
    // Implement the logic to handle deleting the task
    console.log('Deleting task:');
    this.taskService.deleteTask(id).subscribe((response) => {

      window.location.reload();

    },
      (error) => {
        console.error('Error adding task:', error);
      })
  }

  updateState(id: string) {
    // Implement the logic to handle deleting the task
    console.log('Deleting task:');
  }


  getAllTasks() {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response.tasks
    },
      (error) => {
        console.error('Error adding task:', error);
      })
    this.router.navigate(['home'])
  }
}