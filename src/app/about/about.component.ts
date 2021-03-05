import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { SdsDialogRef } from "@gsa-sam/components";

import { selectionPanelConfig } from './navigation/navigation.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  isMobileMode: boolean;
  mobileDialog: SdsDialogRef<any>;

  selectionPanelModel = selectionPanelConfig;

  constructor(public router: Router) {}

  ngOnInit() {
  }

  onDialogOpen($event) {
    this.mobileDialog = $event;
  }

  onCancelClicked() {
    this.mobileDialog.close();
    this.mobileDialog = undefined;
  }

}
