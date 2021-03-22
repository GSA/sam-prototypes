import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'display-section',
  template: `
  	<div [id]="id" class="display-flex flex-row flex-align-center border-top-2px border-base padding-top-05">
  	  <sds-icon class="text-secondary" [icon]="['bs', 'stop-fill']"></sds-icon>
  	  <h2 class="margin-top-0 margin-left-1">{{title}}</h2>
  	</div>
  	<div class="padding-top-1 padding-bottom-2">
    <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplaySectionComponent implements OnInit {

  @Input() title: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
