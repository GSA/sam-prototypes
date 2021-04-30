import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'navigation-link',
  template: `
  	<ng-container [ngTemplateOutlet]="getItemTemplate()" [ngTemplateOutletContext]="{$implicit:link}">
    </ng-container>

	<ng-template #routeLinkTemplate let-link>
	  <a [attr.class]="link.selected ? ' usa-current' : ''" [routerLink]="[link.route]" (click)="linkClickEvent(link)"
	    [queryParams]="link.queryParams" 
	    [queryParamsHandling]="link.queryParamsHandling">
	      <span>{{link.text}}</span>
	  </a>
	</ng-template>

	<ng-template #hrefLinkTemplate let-link>
	  <a [attr.class]="link.selected ? ' usa-current' : ''" [attr.href]="urlBuilder(link)"
	    (click)="linkClickEvent(link)"><span>{{link.text}}</span></a>
	</ng-template>
  `
})
export class NavigationLinkComponent implements OnInit {

  @Input() link: INavigationLink;

  @ViewChild('routeLinkTemplate', { static: false })
  private routeLinkTemplate: TemplateRef<any>;

  @ViewChild('hrefLinkTemplate', { static: false })
  private hrefLinkTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  getItemTemplate() {
  	return (this.link.mode == NavigationMode.INTERNAL) ? this.routeLinkTemplate : this.hrefLinkTemplate;
  }

}
