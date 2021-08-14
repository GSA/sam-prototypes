import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'workspace-subheader',
  template: `
      <sds-subheader>
      <!-- =============== BACK BUTTON =============== -->
      <button class="sds-button sds-button--circular sds-navbar__back-button" [routerLink]="['/workspace']">
        <usa-icon [icon]="'chevron-left'"></usa-icon>
        <span class="usa-sr-only">Go Back</span>
      </button>

      <!-- =============== TITLE =============== -->
      <span class="sds-navbar__title">
        {{title}}
      </span>

      <!-- =============== SEARCH =============== -->
      <sds-search
        [(ngModel)]="searchModel"
        [searchSettings]="searchSettings"
        (submit)="searchSubmit($event)"
      >
      </sds-search>

      <!-- =============== BUTTON GROUP =============== -->
      <ng-container subheader-buttons-container>
        <ng-content select="button"></ng-content>
      </ng-container>

      <!-- =============== ACTIONS BUTTONS =============== -->
      <sds-subheader-actions
        [model]="actionsModel"
        (clicks)="actionClicked($event)"
      ></sds-subheader-actions>

    </sds-subheader>
  `
})
export class WorkspaceSubheaderComponent implements OnInit {

  @Input() title;
  @Input() placeholder;

  searchSettings;

  searchModel: any = {}

  @Output() download: EventEmitter<any> = new EventEmitter();

  public actionsModel = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor() { }

  ngOnInit(): void {

  	this.searchSettings = {
  		placeholder: this.placeholder,   
  		parentSelector: '.sds-subheader__content',
    	inputClass: 'width-card-lg widescreen:width-mobile display-none desktop-lg:display-inline-block',
    	size: 'small',
    	ariaLabel: 'Search Exclusions',
    	dropdown: {}
  	}
  }

  searchSubmit(keyword) {

  }

  actionClicked(buttonId) {
    if (buttonId == 'download') {
      this.download.emit(null);
    }
  }

}
