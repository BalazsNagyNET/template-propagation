import { Component } from '@angular/core';
import { Child } from './child/child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  children: Child[] = [
    { Name: 'A', Children: [{ Name: 'X' }, { Name: 'Y' }, { Name: 'Z' }] },
    { Name: 'B', Children: [{ Name: '1' }, { Name: '2' }, { Name: '3' }] },
    { Name: 'C', Children: [{ Name: '@' }, { Name: '@' }, { Name: '@' }] }
  ];
}
