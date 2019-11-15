import { Component, OnInit, Input } from '@angular/core';

import { SamModelService } from '../model/sam-model.service';
import { HelpData, HelpType, VideoData, FAQData, TermData, FeatureData } from './service/help.model';
import { HelpService } from './service/help.service';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { helpNavigationData} from './navigation/navigation.data';

@Component({
  selector: 'sam-help',
  templateUrl: './help.component.html',
  styleUrls: ['./_styles.scss']
})
export class HelpComponent implements OnInit {

  public sideNavModel: SideNavigationModel = helpNavigationData;

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' },
      { id: 'FollowBtn', icon: 'bars', text: 'Follow' },
      { id: 'ShareBtn', icon: 'bars', text: 'Share' }
    ]
  };

  constructor(public service: HelpService, public model: SamModelService) {  
  }

  ngOnInit() {}

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
