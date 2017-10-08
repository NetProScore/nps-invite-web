import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PollViewComponent} from './poll-view/poll-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PollViewComponent
  ],
  exports: [
    PollViewComponent
  ]

})
export class PollModule {
}
