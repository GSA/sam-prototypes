import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: "back-button",
  template: `
    <button class="sds-button sds-button--circular" (click)="back()">
      <usa-icon [icon]="'chevron-left'"></usa-icon>
      <span class="usa-sr-only">Go Back</span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackButtonComponent implements OnInit {

  @Input() route: string;
  @Input() queryParams: any[];

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  back() {
    if(!this.route) {
	     this.location.back();
    } else {
       this.router.navigate([this.route]);
    }
  }
}
