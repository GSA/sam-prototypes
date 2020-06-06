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
import { CdkAccordionItem } from "@angular/cdk/accordion";
import { SideNavigationModel, NavigationMode, INavigationLink, SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';

import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { navigationConfig } from './navigate.config';
import { filters } from './filters.config';


@Component({
  selector: 'app-databank-search',
  templateUrl: './databank-search.component.html',
  styleUrls: ['./databank-search.component.scss']
})
export class DatabankSearchComponent implements OnInit {

  form = new FormGroup({});
  filterModel;
  fields: FormlyFieldConfig[] = [];

  showFilters: boolean = true;
  domainLabel: string;
  domainExpanded: boolean = false;
  filtersExpanded: boolean = true;
  domain: string;

  @ViewChild('domainAccordion', { static: true })
    domainAccordion: CdkAccordionItem;
  @ViewChild('filtersAccordion', { static: true })
    filtersAccordion: CdkAccordionItem;

  public filterChange$ = new BehaviorSubject<object>(null);

  constructor(private route: ActivatedRoute, 
    private change: ChangeDetectorRef,) {
    this.fields = filters;
  }


  ngOnInit() {    
    this.route.queryParams.subscribe(
      data => {
   		 this.domain = this.route.snapshot.queryParamMap.get('index');
      });
  }

  ngAfterViewInit() {      
    this.change.detectChanges();
  }

  newSearch(value) {
  	console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

  public navigationModel: SideNavigationModel = navigationConfig;

}
