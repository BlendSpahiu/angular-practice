import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task = {
    taskName: '',
    taskDescription: '',
    taskDeadline: '',
  };
  @Input() test = '';

  editTaskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescription: new FormControl('', Validators.required),
    taskDeadline: new FormControl('', Validators.required),
    isDone: new FormControl(false, Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    console.log(this.test);
  }
}
