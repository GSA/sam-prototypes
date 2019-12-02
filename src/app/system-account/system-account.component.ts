import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavigationModel, NavigationMode, INavigationLink } from '@gsa-sam/components';
import { SystemAccountDataService } from './system-account-data/system-account-data.service';
import { SystemAccountData } from './system-account-data/system-account.model';

import { systemAccountsSideNavigationData } from './navigation.data';

@Component({
  selector: 'app-system-account',
  templateUrl: './system-account.component.html',
  styleUrls: ['./system-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAccountComponent implements OnInit {

  sideNavModel: SideNavigationModel = systemAccountsSideNavigationData;
  model: SystemAccountData;

  public subheader = {
    buttons: [
      { id: 'Update', text: 'Button', class: 'usa-button--secondary' },
      { id: 'Submit', text: 'Button', class: 'usa-button--primary' }
    ],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: SystemAccountDataService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    	this.model = this.service.getAccount(params.get('id'));
    	this.service.setCurrentAccount(this.model);
    });
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}
