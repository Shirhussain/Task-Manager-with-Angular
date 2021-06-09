import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
// import { TASKS } from 'src/app/moke-task';
// import {TASKS} from '../../moke-task'
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // tasks: Task[] = TASKS
  // previously i have wrote the above line of code before generating service
  // but now to initialize so i need to put it empty
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks();
    // because I use it as observable so i need to comment the line above
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task){
    // here we need to call a service method deleteTask
    // subscribe here it means 'then what should you do'
    this.taskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id  ))
    );
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    console.log(task);
  }
}
