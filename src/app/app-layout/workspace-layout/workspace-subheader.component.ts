import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-workspace-subheader',
  template: `
      <sds-subheader>
      <!-- =============== BACK BUTTON =============== -->
      <button class="sds-button sds-button--circular sds-navbar__back-button" [routerLink]="['/workspace']">
        <sds-icon [icon]="'chevron-left'"></sds-icon>
        <span class="usa-sr-only">Go Back</span>
      </button>

      <!-- =============== TITLE =============== -->
      <span class="sds-navbar__title">
        Contract Opportunities
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
        <button class="usa-button usa-button--secondary grid-col-6">Button</button>
        <button class="usa-button grid-col-6">Button</button>
      </ng-container>

      <!-- =============== ACTIONS BUTTONS =============== -->
      <sds-subheader-actions
        [model]="subheader"
        (clicks)="onActionMenuItem($event)"
      ></sds-subheader-actions>

    </sds-subheader>
  `
})
export class WorkspaceSubheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchSubmit(keyword) {
  
  }

}