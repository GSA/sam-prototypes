import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationMode } from '@gsa-sam/components';
import { FeedServicesModule } from './feed-services.module';
import { FeedItem, FeedService } from '../interfaces/public-apis';

@Injectable({
  providedIn: FeedServicesModule
})
export class NotificationsService implements FeedService {
    notifications: FeedItem[] = [
    	{
    		  text: "SAM.gov registration is always FREE",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "ANN0001",
  			  date: new Date(2021, 3, 8),
  			  description: 'There is NO FEE to register, or maintain your registration, in the System for Award Management (SAM.gov). If you receive an email from a company claiming to represent SAM.gov, be cautious.'
    	},
    	{
    	    text: "Changes to FSD.gov",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "ANN0002",
  			  date: new Date(2020, 12, 20),
  			  description: 'Effective December 8, 2020 there are changes to the layout of the Federal Service Desk. With the new look and feel, the functions you\'re accustomed to remain easily accessible.'
    	},
    	{
      	  text: "FPDS Reports Transition",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			  id: "ANN0003",
  			  date: new Date(2020, 10, 16),
  			  description: 'The FPDS reports transition to beta.SAM.gov is complete and beta.SAM.gov is the only place to go to create and run contract data reports.  To search contract data, continue to use FPDS.gov.'
    	}

    ];

  constructor() { }

  getFeedItems(): Observable<FeedItem[]> {
      return of(this.notifications);
  }
}
