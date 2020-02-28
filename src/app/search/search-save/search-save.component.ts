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

import { SideNavigationModel, NavigationMode, INavigationLink, SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';
import { SearchListConfiguration } from '@gsa-sam/layouts';

import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { SearchSaveService } from './search-save-service/search-save.service';

import { navigationConfig } from './navigate.config';
import { searchSaveListConfig, searchSaveListFilters } from './search-save.config';

@Component({
  selector: 'app-search-save',
  templateUrl: './search-save.component.html',
  styleUrls: ['./search-save.component.scss']
})
export class SearchSaveComponent implements OnInit {

  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = searchSaveListFilters;

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

  constructor(
    public service: SearchSaveService,
    private route: ActivatedRoute,
    public router: Router,
    private change: ChangeDetectorRef,
    public dialog: SdsDialogService) { 

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  	this.change.detectChanges();
  }

  newSearch(value) {
  	console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

  public navigationModel: SideNavigationModel = navigationConfig;
  public listModel: SearchListConfiguration = searchSaveListConfig;

}
