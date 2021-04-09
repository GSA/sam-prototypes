import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { SideNavigationModel, SdsSideNavigationComponent, SdsDialogService, SdsDialogRef } from '@gsa-sam/components';


@Component({
  selector: 'display-navigation',
  templateUrl: './display-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayNavigationComponent implements OnInit {

  @Input() model: SideNavigationModel;

  @ViewChild('toolbarContent') toolbar;
  @ViewChild(SdsSideNavigationComponent) sideNav: SdsSideNavigationComponent;

  isMobileMode: boolean;
  responsiveDialog: SdsDialogRef<any>;

  constructor(public dialog: SdsDialogService, 
    private change: ChangeDetectorRef) { }

  public select(linkId) {
    this.sideNav.select(linkId);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
     this.change.detectChanges(); 
  }

  onDialogChange(event) {

  }

  onResponsiveViewChange(event) {
    this.isMobileMode = event;

    if (!this.isMobileMode && this.responsiveDialog) {
      this.responsiveDialog.close();
      this.responsiveDialog = undefined;
      this.onDialogChange(this.responsiveDialog);
    }
  }

  onNavigate(event) {

  }

  onCancel() {
    this.responsiveDialog.close();
    this.responsiveDialog = undefined;
  }

}
