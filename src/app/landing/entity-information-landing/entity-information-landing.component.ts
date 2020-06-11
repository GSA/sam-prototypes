import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-entity-information-landing',
  templateUrl: './entity-information-landing.component.html',
  styleUrls: ['./entity-information-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityInformationLandingComponent implements OnInit {
  
  searchModel = {};

  @ViewChild('searchBar', { static: true }) searchBar;

  searchSettings = {
    size: 'large'
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  search(searchForm) {
     this.router.navigate(['/search/results'], { queryParams: { index: 'entityinfo' } });
  }
}
