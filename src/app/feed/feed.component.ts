import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'sam-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./_styles.scss']
})
export class FeedComponent implements OnInit {

  domain: string;
  view: string;
  showFilters: boolean;
  showNav: boolean;

  constructor(private route: ActivatedRoute, public model: SamModelService) {  
    this.view = 'open';
    this.showFilters = true;
    this.showNav = false;

    this.model.feature = 'messages';
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