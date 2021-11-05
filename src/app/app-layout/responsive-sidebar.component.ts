import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SdsDialogRef } from '@gsa-sam/components';

@Component({
  selector: 'responsive-sidebar',
  template: `
          <sds-side-toolbar (responsiveDialog)="onDialogChange($event)" (responsiveView)="isMobileMode = $event;" [responsiveButtonText]="title">
            <ng-template #toolbarContent>
              <div class="usa-card" *ngIf="isMobileMode">
                <div class="usa-card__container">
                  <div class="usa-card__header bg-accent-cool-lighter grid-row">
                    <button id="cancelButton" class="sds-button sds-button--circular sds-button--white padding-top-1" (click)="onCancelClicked()"
                      [aria-label]="'Cancel ' + title">
                      <usa-icon [icon]="'chevron-left'"></usa-icon>
                    </button>
                    <div class="margin-x-auto">
                      <h2 class="usa-card__heading margin-top-1 margin-left-neg-2">{{title}}</h2>
                    </div>
                  </div>
                </div>
 
              </div>
              <ng-content></ng-content>
              <div class="usa-card" *ngIf="isMobileMode && showApply">
                <div class="usa-card__body bg-accent-cool-lighter">
                  <button class="usa-button" id="applyButton" aria-label="Apply" (click)="onApplyFilter()">Apply</button>
                </div>
              </div>
            </ng-template>
          </sds-side-toolbar>
  `
})
export class ResponsiveSidebarComponent implements OnInit {

  isMobileMode: boolean;

  responsiveDialog: SdsDialogRef<any>;

  @Input() title: string;
  @Input() showApply: boolean = true;

  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onApply: EventEmitter<any> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
    router.events.subscribe((val) => {
        // see also 
        if(!this.showApply && this.isMobileMode && this.responsiveDialog && val instanceof NavigationEnd) {
           this.onApplyFilter();
        }
    });
  }

  ngOnInit(): void {
  }

    /**
   * Applies current filter and domain changes when 'Apply' button
   * is clicked on responsive dialog
   */
  onApplyFilter() {

    this.responsiveDialog.close();
    this.responsiveDialog = undefined;

    this.onApply.emit();

  }

  /**
   * Back button on responsive dialog was clicked
   */
  onCancelClicked() {
    this.responsiveDialog.close();
    this.responsiveDialog = undefined;

    this.onCancel.emit();
  }

  onResponsiveViewChange($event) {
    this.isMobileMode = $event;

    if (!this.isMobileMode && this.responsiveDialog) {
      this.responsiveDialog.close();
      this.responsiveDialog = undefined;
      this.onDialogChange(this.responsiveDialog);
    } 
  }

  onDialogChange(dialog) {
      this.responsiveDialog = dialog;
      this.onChange.emit(dialog);
  }

}
