import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-entry-subheader',
  template: `
  	<sds-subheader>
      <back-button></back-button>
	  <subheader-title [title]="title"></subheader-title>
	  <ng-container subheader-buttons-container>
        <ng-content select="button"></ng-content>
      </ng-container>
	  <sds-subheader-actions [model]="actionsModel" (clicks)="actionClicked($event)">
      </sds-subheader-actions>
    </sds-subheader>
  `
})
export class DataEntrySubheaderComponent implements OnInit {

  @Input() title: string;

  @Output() download: EventEmitter<any> = new EventEmitter();

  public actionsModel = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  actionClicked(buttonId) {
    if (buttonId == 'download') {
      this.download.emit(null);
    }
  }

}
