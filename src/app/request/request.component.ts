import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

import { SamModelService } from '../model/sam-model.service';
import { RequestService } from './service/request.service';
import { requestNavigationData} from './navigation/navigation.data';

@Component({
  selector: 'sam-request',
  templateUrl: './request.component.html',
  styleUrls: ['./_styles.scss']
})
export class RequestComponent implements OnInit {

  domain: string;

  constructor(private route: ActivatedRoute, public service: RequestService, public model: SamModelService) {  
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

  public sideNavModel: SideNavigationModel = requestNavigationData;

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}