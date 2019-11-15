import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

import { SamModelService } from '../model/sam-model.service';
import { FeedService } from './service/feed.service';
import { MessageType } from './service/feed.model';
import { feedNavigationData} from './navigation/navigation.data';

@Component({
  selector: 'sam-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./_styles.scss']
})
export class FeedComponent implements OnInit {

  domain: string;

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private route: ActivatedRoute, public service: FeedService, public model: SamModelService) {  
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

  public sideNavModel: SideNavigationModel = feedNavigationData;

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}