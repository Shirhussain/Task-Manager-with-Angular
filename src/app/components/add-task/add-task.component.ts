import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();
  text: string;
  day: string;
  reminder: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('please add a task');
      return;
    }

    // this new task is best on new form input
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    // here we should add the newTask which is our form input
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
