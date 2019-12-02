import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SystemAccountData } from '../../system-account/system-account-data/system-account.model';
import { SystemAccountDataService } from '../../system-account/system-account-data/system-account-data.service';

@Component({
  selector: 'app-system-accounts-workspace',
  templateUrl: './system-accounts-workspace.component.html',
  styleUrls: ['./system-accounts-workspace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAccountsWorkspaceComponent implements OnInit {

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: SystemAccountDataService) { }

  ngOnInit() {
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}
