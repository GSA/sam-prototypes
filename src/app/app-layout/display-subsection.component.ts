import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'display-subsection',
  template: `
	  	<div *ngIf="title != null" class="display-flex flex-row flex-align-center border-top-1px border-base-light padding-top-1">
	  	  <h3 class="margin-top-0">{{title}}</h3>
	  	</div>
	  	<div class="padding-top-1 padding-bottom-2">
	    	<ng-content></ng-content>
	    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplaySubsectionComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
