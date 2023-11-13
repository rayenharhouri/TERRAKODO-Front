import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Task } from 'src/interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _apiUrl: string = "http://localhost:9090"

  constructor(private http: HttpClient, private router: Router) { }

  getTasks() : Observable<any>  {
    const url = `${this._apiUrl}/task/retriveAllTasks`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("Token")}`,
      'Accept': '*/*',
    });

    return this.http.get<any>(url, { headers }).pipe(
      catchError((error) => {
        return throwError('An error occurred.');
      })
    );
  }

  addTask(_title: string, _description: string, _priority: number, _dueDate: Date) : Observable<any> {
    const url = `${this._apiUrl}/task/addTask`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("Token")}`,
      'Accept': '*/*',
    });

    const body = {
      title: _title,
      description: _description,
      priority: _priority,
      dueDate: _dueDate
    };

    return this.http.post<any>(url, body, { headers }).pipe(
      catchError((error) => {
        return throwError('An error occurred.');
      })
    );
  }

  editTask(idTask: string, _title: string, _description: string, _priority: number, _dueDate: Date) : Observable<any>{
    const url = `${this._apiUrl}/task/updateTask/${idTask}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("Token")}`,
      'Accept': '*/*',
    });

    const body = {
      title: _title,
      description: _description,
      priority: _priority,
      dueDate: _dueDate
    };

    return this.http.put<any>(url, body, { headers }).pipe(
      catchError((error) => {
        return throwError('An error occurred.');
      })
    );
  }

  deleteTask(idTask: string) : Observable<any>{
    const url = `${this._apiUrl}/task/deleteTask/${idTask}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("Token")}`,
      'Accept': '*/*',
    });

    return this.http.delete<any>(url, { headers }).pipe(
      catchError((error) => {
        return throwError('An error occurred.');
      })
    );
  }

  changeStateOfTask(idTask: string, _status: string) : Observable<any>{
    const url = `${this._apiUrl}/task/updateStatus/${idTask}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("Token")}`,
      'Accept': '*/*',
    });

    const body = {
      status: _status
    };

    return this.http.put<any>(url, { headers }).pipe(
      catchError((error) => {
        return throwError('An error occurred.');
      })
    );
  }

  getTaskByID(taskid: string) : Observable<Task> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("Token")}`,
      'Accept': '*/*'
    });

    const body = {
      id: taskid
    };

    return this.http.post<Task>(`${this._apiUrl}/task/getTaskById`, body, { headers });
  
  }
}
