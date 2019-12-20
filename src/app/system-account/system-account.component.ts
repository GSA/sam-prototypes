import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavigationModel, NavigationMode, INavigationLink } from '@gsa-sam/components';
import { SystemAccountDataService } from './system-account-data/system-account-data.service';
import { SystemAccountData } from './system-account-data/system-account.model';

@Component({
  selector: 'app-system-account',
  templateUrl: './system-account.component.html',
  styleUrls: ['./system-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAccountComponent implements OnInit {

  sideNavModel: SideNavigationModel = {
    navigationLinks: [
      {
        id: 'edit', text: 'Account Details', mode: NavigationMode.INTERNAL, route: 'review', children: [
          {
            id: 'info',
            // showFunction:this.isDraft.bind(this),
            text: 'System Information', mode: NavigationMode.INTERNAL, route: 'info'
          },
          {
            id: 'organization',
            // showFunction:this.isDraft.bind(this),
            text: 'Organization',
            // showFunction:this.isDraft.bind(this),
            mode: NavigationMode.INTERNAL, route: 'organization'
          },
          {
            id: 'permissions',
            // showFunction:this.isDraft.bind(this),
            text: 'Permissions', mode: NavigationMode.INTERNAL, route: 'permissions'
          },
          {
            id: 'security',
            // showFunction:this.isDraft.bind(this),
            text: 'Security', mode: NavigationMode.INTERNAL, route: 'security'
          },
          {
            id: 'authorization',
            // showFunction:this.isDraft.bind(this),
            text: 'Authorization', mode: NavigationMode.INTERNAL, route: 'auth'
          }
        ]
      },
      {
        id: 'reset-password',
        // showFunction:this.isDraft.bind(this),
        text: 'Reset Password',
        // showFunction:this.isNotDraft.bind(this),
        mode: NavigationMode.INTERNAL, route: 'system-password'
      },
      {
        id: 'history',
        // showFunction:this.isNotDraft.bind(this),
        text: 'History', mode: NavigationMode.INTERNAL, route: 'history'
      }
    ]
  };




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


  isDraft() {
    return this.model.status === 'Draft';
  }

  isNotDraft() {
    return !this.isDraft;
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}
