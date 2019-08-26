import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

import { SamModelService } from '../../model/sam-model.service';
import { HelpService } from './service/help.service';
import { helpNavigationData} from './navigation/navigation.data';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryComponent implements OnInit {

  domain: string;

  public sideNavModel: SideNavigationModel = helpNavigationData;

  constructor(private route: ActivatedRoute, public service: HelpService, public model: SamModelService) {  
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
