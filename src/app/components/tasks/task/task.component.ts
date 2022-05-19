import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  editTaskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescription: new FormControl('', Validators.required),
    taskDeadline: new FormControl('', Validators.required),
    isDone: new FormControl(false, Validators.required),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}

  test_yes_something = 'good!';

  updateFields(data: Task) {
    this.editTaskForm.patchValue({ ...data });
  }

  updateTask() {
    this.taskService
      .updateTask(this.data.id, {
        ...this.editTaskForm.value,
      })
      .subscribe((data) => this.updateFields(data));
    this.dialog.closeAll();
  }

  ngOnInit(): void {
    this.updateFields(this.data);
  }
}
