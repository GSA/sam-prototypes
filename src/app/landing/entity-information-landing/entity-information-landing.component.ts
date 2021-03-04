import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {allIcons} from 'ngx-bootstrap-icons';

import { LandingBaseComponent } from '../shared/landing-base/landing-base.component';
import { entityContent } from './entity-information.content';

@Component({
  selector: 'app-entity-information-landing',
  templateUrl: './entity-information-landing.component.html',
  styleUrls: ['./entity-information-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityInformationLandingComponent extends LandingBaseComponent implements OnInit {

  searchModel = {};

  accordionContent: any[] = [];
  cardContent: any[] = [];

  @ViewChild('searchBar', { static: true }) searchBar;

  searchSettings = {
    size: 'large'
  };

  constructor(private router: Router) { 
    super();
  }

  ngOnInit() {
      this.accordionContent = this.getContentByKey(entityContent, 'searchHelp');
      this.cardContent = this.getContentByKey(entityContent, 'cardContents');
  }

  ngAfterViewInit() {

  }

  search(searchForm) {
     this.router.navigate(['/search'], { queryParams: { index: 'entityinfo' } });
  }
}
