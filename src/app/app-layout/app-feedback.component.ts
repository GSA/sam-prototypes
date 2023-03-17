import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-feedback",
  template: `
    <sds-feedback
      [feedbackModel]="feedbackModel"
      [isCollapsedContent]="isCollapsed"
      (feedbackSubmit)="onFeedbackSubmit($event)"
    ></sds-feedback>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFeedbackComponent implements OnInit {
  constructor() {}

  feedbackModel: FormControl;
  isCollapsed: boolean = true;

  ngOnInit() {
    this.feedbackModel = new FormControl("");
  }

  onFeedbackSubmit(feedback) {
    this.isCollapsed = true;
    console.log("Thank you for your feedback");
  }
}
