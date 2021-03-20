import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'display-subheader',
  template: `
	<sds-subheader>
      <back-button></back-button>
	  <subheader-title [title]="title"></subheader-title>
	  <sds-subheader-actions [model]="actionsModel" (clicks)="actionClicked($event)">
      </sds-subheader-actions>
    </sds-subheader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplaySubheaderComponent implements OnInit {

  @Input() title: string;

  @Output() follow: EventEmitter<any> = new EventEmitter();
  @Output() download: EventEmitter<any> = new EventEmitter();

  public actionsModel = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' },
      { id: 'follow', icon: 'bars', text: 'Follow' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  actionClicked(event) {

  }

}
