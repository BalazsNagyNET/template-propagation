import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../child/child.component';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {
  @Input() child: Child;
  constructor() {}

  ngOnInit() {}
}
