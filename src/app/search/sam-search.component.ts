import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { SamModelService } from '..//model/sam-model.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { fieldsList, modelList } from '../search1/data/formly-list';

@Component({
  selector: 'sam-search',
  templateUrl: './sam-search.component.html',
  styleUrls: ['./_styles.scss']
})
export class SamSearchComponent implements OnInit {
  public form: FormGroup;
  public searchModel;
  public fields: FormlyFieldConfig[];

  domain: string;
  view: string;
  showFilters: boolean;
  showNav: boolean;

  constructor(private route: ActivatedRoute, public model: SamModelService,  private router: Router) {  
    this.view = 'open';
    this.showFilters = false;
    this.showNav = true;
    this.model.feature = 'search';

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.domain = this.route.snapshot.queryParamMap.get('domain');
        const list = fieldsList.filter(x => x.domain == this.domain);
        const listModel = modelList.filter(x => x.domain == this.domain);

        this.fields = list[0].FormlyFields;
        this.searchModel = listModel[0].model;
      }
    });

  }

  setView(view: string) {
    this.view = view;
  }

  setModelDomain(domain: string) {
    this.model.domain = domain;
  }

  isDomainIn(parentDomain: string) {
    if(parentDomain == 'contractinginfo') {
      return this.domain == 'contractinginfo' || this.domain == 'contractopportunities' || this.domain == 'contractdata';
    }
    if(parentDomain == 'entityinfo') {
      return this.domain == 'entityinfo' || this.domain == 'registration' || this.domain == 'disasterresponse' ||
            this.domain == 'exclusions' || this.domain == 'integrityinfo';
    }
    if(parentDomain == 'assistance') {
      return this.domain == 'assistance' || this.domain == 'assistancelist';
    }
    if(parentDomain == 'wagedeterminations') {
        return this.domain == 'wagedeterminations' || this.domain == 'dbawd' || this.domain == 'scawd';
    }
  }

  ngOnInit() {
      this.domain = this.route.snapshot.queryParamMap.get('domain');
      this.route.queryParamMap.subscribe(queryParams => {
        this.domain = queryParams.get('domain');
        if(!this.domain) {
          this.domain = 'all';
        }
      });
  }

}
