import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  test_what_something = '';
  test_Test_something = 'Test';

  openDialog(task: Task) {
    this.dialog.open(TaskComponent, { data: task });
  }

  markTaskAsDone(id: number, isDone: boolean) {
    this.taskService
      .markAsDone((isDone = !isDone), id)
      .subscribe((_data) => null);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((_data) => null);
    this.snackBar.open('Task deleted successfully');
    this.tasks.splice(-1);
  }

  editTask(task: Task) {
    this.taskService.getTaskById(task.id).subscribe((data) => {
      this.task = data;
    });
    this.openDialog(task);
  }
}
