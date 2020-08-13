import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { SamModelService } from '../../model/sam-model.service';
import { AlertService } from './alert-service/alert.service';
import { cmsSideNav} from './navigation.data';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlertsComponent implements OnInit {

  domain: string;

  public subheader = {
    actions: [
      { id: 'downloadAction', icon: 'downloadAction', text: 'Download' },
      { id: 'saveAction', icon: 'downloadAction', text: 'Save' }
    ]
  };

  // sideNavModel = cmsSideNav;


  constructor(private route: ActivatedRoute, public service: AlertService, public model: SamModelService, private change: ChangeDetectorRef,) {  
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

ngAfterViewInit() {
  this.change.detectChanges();
}

public sideNavModel: SideNavigationModel = cmsSideNav;

log(value) {
  console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
}

  // subheaderActionClicked(action) {
  //   console.log(`%cLog: Action Clicked `+action, 'color: blue; font-weight: bold');
  // }

}
