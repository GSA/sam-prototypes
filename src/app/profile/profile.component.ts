import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AppService } from '../services/app-service/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public navigationData;

  public subheaderActions = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private appService: AppService) { 
	  this.navigationData = appService.workspaceMenu;
  }

  ngOnInit() {
    
  }

  actionClicked(action) {

  }

}
