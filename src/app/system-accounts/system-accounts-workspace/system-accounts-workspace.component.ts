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
import { SystemAccountsFiltersService } from './system-accounts-filters/system-accounts-filters.service';
import { SystemAccountsService } from './system-accounts-service/system-accounts.service';

@Component({
  selector: 'app-system-accounts-workspace',
  templateUrl: './system-accounts-workspace.component.html',
  styleUrls: ['./system-accounts-workspace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAccountsWorkspaceComponent implements OnInit {

  @ViewChild('resultList', { static: true }) resultList;

  form = new FormGroup({});

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

  subheader = {
    actions: [
      { id: 'downloadAction', icon: 'downloadAction', text: 'Download' }
    ]
  };

  navigationModel = workspaceSideNavigationData;


  constructor(private change: ChangeDetectorRef, public service: SystemAccountsService,
      public filterService: SystemAccountsFiltersService) { 
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
  	console.log(`%cLog: Creating new account`, 'color: blue; font-weight: bold');
  }

  newSearch(event) {
  	console.log(`%cLog: Searching accounts`, 'color: blue; font-weight: bold');
  }

}

