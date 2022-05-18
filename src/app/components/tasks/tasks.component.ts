import { Component, OnInit } from '@angular/core';
import {
  MatCheckboxDefaultOptions,
  MAT_CHECKBOX_REQUIRED_VALIDATOR,
} from '@angular/material/checkbox';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/models/Task';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  tasks: Task[] = [];

  task = new Task();

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  openDialog() {
    this.dialog.open(TaskComponent);
  }

  markTaskAsDone(id: number, isDone: boolean) {
    this.taskService
      .markAsDone((isDone = !isDone), id)
      .subscribe((_data) => null);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((_data) => null);
    this.snackBar.open('Task deleted successfully');
    window.location.reload();
  }

  editTask(id: number) {
    this.openDialog();
    this.taskService.getTaskById(id).subscribe((data) => (this.task = data));
  }
}
