import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';

export interface ILandingPageLink extends INavigationLink {
	subtext?: string;
}

@Component({
  selector: 'home-splash-tile',
  templateUrl: './home-splash-tile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSplashTileComponent implements OnInit {

    landingPages: ILandingPageLink[][] = [[
    	{
    		  text: 'Contract Opportunities',
    		  route: 'home/opportunities',
    		  mode: NavigationMode.INTERNAL,
			  subtext: '(was fbo.gov)'
    	},
    	{
    		  text: 'Contract Data',
    		  route: 'home/contract-data',
    		  mode: NavigationMode.INTERNAL,
			  subtext: '(Reports ONLY from fpds.gov)'
    	},
    	{
    		  text: 'Wage Determinations',
    		  route: 'home/wages',
    		  mode: NavigationMode.INTERNAL,
			  subtext: '(was wdol.gov)'
    	},
    	{
    		  text: 'Federal Hierarchy',
    		  route: 'home/hierarchy',
    		  mode: NavigationMode.INTERNAL,
			  subtext: 'Departments and Subtiers'
    	}
    ],
    [
        {
    		  text: 'Assistance Listings',
    		  route: 'home/assistance',
    		  mode: NavigationMode.INTERNAL,
			  subtext: '(was cfda.gov)'
    	},
    	{
    		  text: 'Entity Registrations',
    		  route: 'home/registration',
    		  mode: NavigationMode.INTERNAL,
			  subtext: 'Including Disaster Response Registry'
    	},
    	{
    		  text: 'Entity Reporting',
    		  route: 'home/entity-compliance',
    		  mode: NavigationMode.INTERNAL,
			  subtext: 'SCR and Bio-Preferred Reporting'
    	},
    	{
    		  text: 'Exclusions',
    		  route: 'home/exclusions',
    		  mode: NavigationMode.INTERNAL
    	}
    ]
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
