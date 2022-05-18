import { Injectable } from '@angular/core';
import { Task } from 'src/models/Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  databaseURL = 'https://6238447a00ed1dbc5ab0ab61.mockapi.io/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.databaseURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.databaseURL}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(
      this.databaseURL,
      JSON.stringify({ ...task, isDone: false }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  deleteTask(id: number): Observable<unknown> {
    return this.http.delete(`${this.databaseURL}/${id}`);
  }

  markAsDone(value: boolean, id: number): Observable<boolean> {
    return this.http.put<boolean>(
      `${this.databaseURL}/${id}`,
      { id, isDone: value },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
