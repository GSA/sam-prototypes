import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { RequestItem } from '../../services/interfaces/public-apis';

@Component({
  selector: 'request-subheader',  
  template: `
    <sds-subheader>
      <back-button></back-button>
      <subheader-title [title]="title"></subheader-title>

    <ng-container subheader-buttons-container>
        <button class="usa-button" (click)="onApprove()">Approve</button>
        <button class="usa-button usa-button--secondary" (click)="onReject()">Reject</button>
    </ng-container>
    <sds-subheader-actions [model]="actionsModel" (clicks)="onAction($event)">
      </sds-subheader-actions>
    </sds-subheader>
  `
})
export class RequestSubheaderComponent implements OnInit {

  @Input() title: string;
  @Input() request: RequestItem;

  @Output() approve: EventEmitter<any> = new EventEmitter();
  @Output() reject: EventEmitter<any> = new EventEmitter();
  @Output() download: EventEmitter<any> = new EventEmitter();

  public actionsModel = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  onApprove() {
    this.approve.emit(this.request);
  }

  onReject() {
    this.reject.emit(this.request);
  }

  onAction(buttonId) {
    if (buttonId == 'download') {
      this.download.emit(this.request);
    }
  }

}
