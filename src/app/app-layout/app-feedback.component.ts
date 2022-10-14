import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  template: `
  	<sds-feedback [feedbackModel]="feedbackModel" [isCollapsedContent]="isCollapsed" (feedbackSubmit)="onFeedbackSubmit($event)"></sds-feedback>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFeedbackComponent implements OnInit {

  constructor() { }

  feedbackModel: UntypedFormControl;
  isCollapsed: boolean = true;

  ngOnInit() {
    this.feedbackModel = new UntypedFormControl('');
  }

  onFeedbackSubmit(feedback) {
    this.isCollapsed = true;
  	console.log('Thank you for your feedback');
  }

}
