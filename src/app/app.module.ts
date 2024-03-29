import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { TemplateMarkerDirective } from './template-marker.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent,
    TemplateMarkerDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
