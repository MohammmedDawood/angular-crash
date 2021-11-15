import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Tasks';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) {
      alert('Please enter a task');
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // emit on submit event to parent component
    this.onAddTask.emit(newTask);

    // empty the all
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
