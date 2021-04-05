import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { INavigationLink } from '@gsa-sam/components';

@Component({
  selector: 'subheader-buttons',
  template: `
	  <ng-container subheader-buttons-container>
	    <ul *ngFor="let link of links" class="sds-button-group--secondary sds-button-group--segmented">
	      <li class="sds-button-group__item">
	        <button class="usa-button" [routerLink]="[link.route]">link.text</button>
	      </li>
	    </ul>
	  </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderButtonsComponent implements OnInit {

  @Input() links: INavigationLink[];

  constructor() { }

  ngOnInit(): void {
  }

}
