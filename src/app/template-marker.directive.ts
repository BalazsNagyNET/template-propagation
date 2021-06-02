import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateMarker]'
})
export class TemplateMarkerDirective {
  constructor(public template: TemplateRef<any>) {}
}
