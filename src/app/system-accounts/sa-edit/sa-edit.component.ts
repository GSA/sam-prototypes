import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { systemAccountEditMenu } from './navigation.data';
import { SystemAccountsService } from '../service/system-accounts.service';

@Component({
  selector: 'app-sa-edit',
  templateUrl: './sa-edit.component.html',
  styleUrls: ['./sa-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaEditComponent implements OnInit {

  constructor(public service: SystemAccountsService) { }

  ngOnInit() {
  }


  public sideNavModel: SideNavigationModel = systemAccountEditMenu;

}
