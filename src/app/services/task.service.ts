import { TASKS } from './../moke-task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// if you want to use is as observable so import this line

// i have no longer need this 'of' which i import because the http client
// will return an Observable
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
// no longer need TASKS coming from moke-task
// import {TASKS} from '../moke-task'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  // just like i have added ("private taskService: TaskService") to 
  // task constructor to use our services in our task component 
  // so i have to do the same thing for http in here as well
  // after that i will be able to use this http and what ever method we have
  // PUT, POST, DELETE etc...
  constructor( private http: HttpClient) { }

  // getTasks(): Task[] {
  //   return TASKS;
  // }
  // i wanna to create this one as observable so that's why i have comment it
  getTasks(): Observable<Task[]>{
    // const tasks = of(TASKS);
    // return tasks
    // new instead of lines above i have to consume from the backend 
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    // for deleting task we need to have an 'id' so to get that 
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
