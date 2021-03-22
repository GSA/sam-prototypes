import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { INavigationLink } from '@gsa-sam/components';

@Component({
  selector: 'link-list',
  template: `
	<ul class="sds-list sds-list--no-bullets">
		<li *ngFor="let item of links" class="margin-0">
			<span class="sds-list__item-content margin-0">
				<a *ngIf="item.route.startsWith('http')" class="usa-link text-semibold" [href]="item.route">
					<div class="display-flex flex-row flex-align-center">
						<span>{{item.text}}</span>
					</div>
				</a>
				<a *ngIf="!item.route.startsWith('http')" class="usa-link text-semibold" [routerLink]="[item.route]">
					<div class="display-flex flex-row flex-align-center">
						<span>{{item.text}}</span>
					</div>
				</a>
			</span>
		</li>
	</ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkListComponent implements OnInit {

  @Input() links: INavigationLink[];

  constructor() { }

  ngOnInit(): void {
  }

}
