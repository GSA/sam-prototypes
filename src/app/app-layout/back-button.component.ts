import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'back-button',
  template: `
  	  <button class="sds-button sds-button--circular" (click)="back()">
        <sds-icon [icon]="['bs', 'chevron-left']"></sds-icon>
        <span class="usa-sr-only">Go Back</span>
      </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent implements OnInit {

  @Input() route: string;

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  back() {
	  this.location.back();
  }

}
