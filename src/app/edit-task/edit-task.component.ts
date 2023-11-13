import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../Services/Task/task.service';
import { Task } from 'src/interfaces/Task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{
  @Input() task: Task = {} as Task;

  route: ActivatedRoute = inject(ActivatedRoute);
  taskID = "";
  constructor(private http: HttpClient, private router: Router, private taskService: TaskService) {

  }

  ngOnInit() {
    this.taskID = this.route.snapshot.params['id'];
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['task']) {
      this.task = state['task'];
    } else {
      // If the post data is not in the router state, fetch it from the API using the ID
      this.taskService.getTaskByID(this.taskID).subscribe(
        (task) => {
          this.task = task;
        },
        error => {
          console.error("Error:", error);
        }
      );
    }
  }

  editTask(title: string, description: string, priority: number, duedate: Date) {
    this.taskService.editTask(this.taskID, title, description, priority, duedate).subscribe(
      () => {
        this.router.navigate(['home'])
      },
      (error) => {
        // An error occurred
        console.error('Error editing task:', error);
      }
    );
  }
}
