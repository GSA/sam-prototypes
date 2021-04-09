import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { profileNavigationData } from './navigation.data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  public navigationData;

  public subheaderActions = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor() { 
	  this.navigationData = profileNavigationData;
  }

  ngOnInit() {
    
  }

  actionClicked(action) {

  }

}
