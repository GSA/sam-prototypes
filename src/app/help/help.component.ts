import { Component, OnInit, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

import { HelpData, HelpType } from './service/help.model';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { helpNavigationData} from './navigation/navigation.data';
import { helpFilters } from './filters.config';
import { HelpFiltersService } from './help-filters/help-filters.service';

@Component({
  selector: 'sam-help',
  templateUrl: './help.component.html',
  styleUrls: ['./_styles.scss']
})
export class HelpComponent implements OnInit {

  public sideNavModel: SideNavigationModel = helpNavigationData;

  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = helpFilters;
  public filterChange$ = new BehaviorSubject<object>(null);  

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public filtersService: HelpFiltersService) {  
  }

  ngOnInit() {}

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
