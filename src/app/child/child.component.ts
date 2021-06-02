import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList
} from '@angular/core';
import { TemplateMarkerDirective } from '../template-marker.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() child: Child;
  @ContentChildren(TemplateMarkerDirective) markers: QueryList<
    TemplateMarkerDirective
  >;
  constructor() {}

  ngOnInit() {}

  filterString(text: string, value: string) {
    return text.indexOf(value) >= 0;
  }
}

export interface Child {
  Name: string;
  Children?: Child[];
  OtherStuff?: string[];
}
