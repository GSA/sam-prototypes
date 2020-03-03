import {
  ViewChild,
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';

import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  UrlSegment,
  NavigationStart
} from '@angular/router';

import { FormlyFieldConfig } from '@ngx-formly/core';
import { SearchListConfiguration } from '@gsa-sam/layouts';

import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { workspaceSideNavigationData } from '../../common/workspace/navigation.data';
import { SystemAccountsFiltersService } from './system-accounts-filters.service';
import { SystemAccountsService } from './system-accounts-service/system-accounts.service';
import { systemAccountsListConfig } from './list.config';

@Component({
  selector: 'app-system-accounts-workspace',
  templateUrl: './system-accounts-workspace.component.html',
  styleUrls: ['./system-accounts-workspace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAccountsWorkspaceComponent implements OnInit {

  @ViewChild('resultList') resultList;

  form = new FormGroup({});
  filterConfig = new SystemAccountsFiltersService();

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

  listModel = systemAccountsListConfig;

  subheader = {
    actions: [
      { id: 'downloadAction', icon: 'downloadAction', text: 'Download' }
    ]
  };

  navigationModel = workspaceSideNavigationData;


  constructor(private change: ChangeDetectorRef, public service: SystemAccountsService) { 
  	console.log(`%cLog: Loading System Accounts Workspace`, 'color: blue; font-weight: bold');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {      
    this.change.detectChanges();
  }

  subheaderActionClicked(action) {

  }

  newAccount(event) {

  }

}

