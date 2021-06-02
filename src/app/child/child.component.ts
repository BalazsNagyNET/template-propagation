import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() child: Child;
  constructor() {}

  ngOnInit() {}
}

export interface Child {
  Name: string;
  Children?: Child[];
}
