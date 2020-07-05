import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'wages-sub-menu',
  templateUrl: './wages-sub-menu.component.html',
  styleUrls: ['./wages-sub-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WagesSubMenuComponent implements OnInit {

    sideMenu: SideNavigationModel = {
	    navigationLinks: [
	        { id: 'wageshome', text: 'Wage Determinations Home', mode: NavigationMode.INTERNAL, route: '/home/wages/main' },
	        { id: 'laboradvisors', text: 'Labor Advisors', mode: NavigationMode.INTERNAL, route: '/home/wages/labor-advisors' },
	        { id: 'dbaconformances', text: 'DBA Conformances', mode: NavigationMode.INTERNAL, route: '/home/wages/dba-conformances' },
	        { id: 'scaconformances', text: 'SCA Conformances', mode: NavigationMode.INTERNAL, route: '/home/wages/sca-conformances' },
	        { id: 'crossindex', text: 'Cross Index', mode: NavigationMode.INTERNAL, route: '/home/wages/cross-index' },
	        { id: 'allagencymemos', text: 'All Agency Memorandums', mode: NavigationMode.INTERNAL, route: '/home/wages/all-agency-memos' },
	    ]
	};


  constructor() { }

  ngOnInit() {
  }

}


