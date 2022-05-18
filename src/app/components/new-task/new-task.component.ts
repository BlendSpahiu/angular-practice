import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  providers: [TaskService],
})
export class NewTaskComponent implements OnInit {
  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescription: new FormControl('', Validators.required),
    taskDeadline: new FormControl('', Validators.required),
  });

  constructor(
    private taskService: TaskService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.taskService.addTask(this.taskForm.value).subscribe((_data) => null);
    this.taskForm.clearValidators();
    this.taskForm.reset();
  }

  showSnackbar(content: string) {
    this.snackBar.open(content);
  }
}
