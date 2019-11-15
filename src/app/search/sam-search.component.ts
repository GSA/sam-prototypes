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
  NavigationStart,

} from '@angular/router';

import { SamModelService } from '..//model/sam-model.service';
import { SamSearchService } from './service/sam-search.service';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { searchSideNavigationData } from './navigation/navigation.data';


import { FormlyFieldConfig } from '@ngx-formly/core';
import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { SearchAllFields } from './filter-config';


@Component({
  selector: 'search',
  templateUrl: './sam-search.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SamSearchComponent implements OnInit, AfterViewInit {
  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = [];
  
  public filterChange$ = new BehaviorSubject<object>(null);

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' },
      { id: 'FollowBtn', icon: 'bars', text: 'Follow' },
      { id: 'ShareBtn', icon: 'bars', text: 'Share' }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private change: ChangeDetectorRef,
    public searchModel: SamSearchService,
    public model: SamModelService
  ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Show loading indicator
        const domain = this.router.url.split('/').pop();
        if (!domain || domain === 'all') {
          this.fields = SearchAllFields;
        } else {
          this.fields = [];
        }
      }
    });

  }
  @ViewChild('sideNav') sideNav;

  ngOnInit() {
    const str = this.route.snapshot.paramMap.get("domain")
    if (!str || str == 'all') {
      this.fields = SearchAllFields;
    }
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let itemCode = 'sideId';
          let child = this.route.firstChild;
          let searchedValue = null;
          if (this.route.snapshot.data && this.route.snapshot.data[itemCode]) {
            searchedValue = this.route.snapshot.data[itemCode];
          }
          while (child) {
            if (child.snapshot.data && child.snapshot.data[itemCode]) {
              searchedValue = child.snapshot.data[itemCode];
            }
            if (child.firstChild) {
              child = child.firstChild;
            } else {
              child = null;
            }
          }
          return searchedValue;
        })
      )
      .subscribe((customData: any) => {
        this.sideNav.select(customData);
      });

  }

  ngAfterViewInit() {
    this.change.detectChanges(); 
    this.searchModel.showNav = true;
  }

  public sideNavModel: SideNavigationModel = searchSideNavigationData;

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}
