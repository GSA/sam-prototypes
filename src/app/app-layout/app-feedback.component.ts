import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  template: `
  	<sds-feedback [feedbackModel]="feedbackModel" (feedbackSubmit)="onFeedbackSubmit($event)"></sds-feedback>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFeedbackComponent implements OnInit {

  constructor() { }

  feedbackModel: FormControl;

  ngOnInit() {
    this.feedbackModel = new FormControl('');
  }

  onFeedbackSubmit(feedback) {
  	console.log('Thank you for your feedback');
  }

}
