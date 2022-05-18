import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-practice';
  navRoutes = [
    {
      path: '/tasks',
      label: 'Tasks',
    },
    {
      path: '/new-task',
      label: 'New task',
    },
  ];
}
