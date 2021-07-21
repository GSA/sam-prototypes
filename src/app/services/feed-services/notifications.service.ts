import { Injectable } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components';
import { FeedServicesModule } from './feed-services.module';
import { FeedItem, Domain } from '../interfaces/public-apis';
import { BaseFeedService } from './base-feed-service';

@Injectable({
  providedIn: FeedServicesModule
})
export class NotificationsService extends BaseFeedService {
    notifications: FeedItem[] = [
    	{
    		  text: "Saved Seach Notification - Vehicle Repair",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "NOT0001",
  			  date: new Date(2021, 3, 8),
  			  description: 'Your saved search, <b>Vehicle Repair</b> has new updates. Click <a class="usa-link">here</a> to view the new results.',
  			  domains: [ Domain.ContractOpportunities ]
    	},
    	{
    		  text: "Saved Seach Notification - DHS Vehicle Reconstruction",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "NOT0001",
  			  date: new Date(2021, 4, 13),
  			  description: 'Your saved search, <b>DHS Vehicle Reconstruction</b> has new updates. Click <a class="usa-link">here</a> to view the new results.',
  			  domains: [ Domain.ContractOpportunities ]
    	},
    	{
    		  text: "Saved Seach Notification - Vehicle Repair",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "NOT0001",
  			  date: new Date(2021, 5, 1),
  			  description: 'Your saved search, <b>Vehicle Repair</b> has new updates. Click <a class="usa-link">here</a> to view the new results.',
  			  domains: [ Domain.ContractOpportunities ]
    	},
    	{
    		  text: "Saved Seach Notification - Vehicle Rentals",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "NOT0001",
  			  date: new Date(2021, 3, 8),
  			  description: 'Your saved search, <b>Vehicle Rentals</b> has new updates. Click <a class="usa-link">here</a> to view the new results.',
  			  domains: [ Domain.ContractOpportunities ]
    	},
    	{
    	      text: "Wage Determination Updated - VA2021012",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "NOT0002",
  			  date: new Date(2021, 1, 14),
  			  description: '<b>VA2021012</b> was updated on <b>Jan 14, 2021</b>',
  			  domains: [ Domain.WageDeterminations ]
    	},
    	{
    	      text: "Wage Determination Updated - VA2021042",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "NOT0002",
  			  date: new Date(2021, 4, 2),
  			  description: '<b>VA2021042</b> was updated on <b>Apr 2, 2021</b>',
  			  domains: [ Domain.WageDeterminations ]
    	},
    	{
    	      text: "Wage Determination Updated - VA2021027",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "NOT0002",
  			  date: new Date(2021, 3, 31),
  			  description: '<b>VA2021027</b> was updated on <b>Mar 31, 2021</b>',
  			  domains: [ Domain.WageDeterminations ]
    	},
    	{
    	      text: "Wage Determination Updated - VA2021035",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "NOT0002",
  			  date: new Date(2020, 12, 20),
  			  description: '<b>VA2021035</b> was updated on <b>Dec 20, 2020</b>',
  			  domains: [ Domain.WageDeterminations ]
    	},
    	{
      	    text: "Entity Registration Renewal Due in 30 Days",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			id: "NOT0003",
  			date: new Date(2020, 10, 16),
  			description: 'Your entity (<b>UEI: AWK34DSKD5TS</b>) expires on <b>Jan 12, 2022</b>.  Renew early to avoid any breaks in eligibility for federal awards.',
  			domains: [ Domain.EntityRegistration ]
    	},
    	{
      	    text: "Role Assigned",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			id: "NOT0004",
  			date: new Date(2021, 4, 12),
  			description: 'You have been assigned a <b>System Administrator</b> role for <b>System Accounts</b>.',
  			domains: [ Domain.RoleManagement ]
    	},
    	{
      	    text: "Role Assigned",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			id: "NOT0005",
  			date: new Date(2021, 4, 30),
  			description: 'You have been assigned an <b>Administrator</b> role for <b>Entity Registration</b>.',
  			domains: [ Domain.RoleManagement ]
    	},
    	{
      	    text: "Contract Opportunity Updated",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			id: "NOT0006",
  			date: new Date(2021, 5, 3),
  			description: 'The contract opportunity <b>USMC Southwest Region Transportation Fleet (SWRFT) Contractor Operated Parts Store (COPARS)</b> with notice ID, <b>693JJ919RQ000461</b>, was updated.',
  			domains: [ Domain.ContractOpportunities ]
    	},
    	{
      	    text: "Contract Opportunity Updated",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			id: "NOT0006",
  			date: new Date(2021, 4, 6),
  			description: 'The contract opportunity <b>Beale AFB Vehicle Maintenance BPA</b> with notice ID, <b>RFQBealeMaintenanceBPA</b>, was updated.',
  			domains: [ Domain.ContractOpportunities ]
    	},
    	{
      	    text: "Contract Opportunity Updated",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			id: "NOT0006",
  			date: new Date(2021, 3, 16),
  			description: 'The contract opportunity <b>Nissan Light Armored Vehicle Retrograde and Repair</b> with notice ID, <b>PAN410-21-P-0000-000485</b>, was updated.',
  			domains: [ Domain.ContractOpportunities ]
    	},
    	{
      	    text: "Contract Opportunity Updated",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			id: "NOT0006",
  			date: new Date(2021, 2, 11),
  			description: 'The contract opportunity <b>Active Vehicle Barriers Maintenance and Repair</b> with notice ID, <b>FA4460-17-T-0004</b>, was updated.',
  			domains: [ Domain.ContractOpportunities ]
    	},
    	{
      	    text: "Contract Opportunity Updated",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			id: "NOT0006",
  			date: new Date(2021, 5, 3),
  			description: 'The contract opportunity <b>Vehicle Corrosion Control Services, Kadena AB</b> with notice ID, <b>FA527021Q0016</b>, was updated.',
  			domains: [ Domain.ContractOpportunities ]
    	}
    ];

  constructor() {
  	super();
  }

  getFeedItems(): FeedItem[] {
      return this.notifications;
  }
}