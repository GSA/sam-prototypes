import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationMode } from '@gsa-sam/components';
import { FeedServicesModule } from './feed-services.module';
import { FeedItem, FeedService } from '../interfaces/public-apis';

@Injectable({
  providedIn: FeedServicesModule
})
export class RequestsService implements FeedService {
    requests: FeedItem[] = [
    	{
    		  text: "Assign Role Request",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "ANN0001",
  			  date: new Date(2021, 3, 8),
  			  description: '<strong>Jane Eyre</strong> has requested a <strong>Data Entry</strong> role for <strong>Contract Opportunities</strong>'
    	},
    	{
    	    text: "Change Title Request",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "ANN0002",
  			  date: new Date(2020, 12, 20),
  			  description: '<strong>Oliver Twist</strong> has requested a title change to <strong>National School Lunch Program</strong>'
    	},
    	{
      	  text: "Assign Role Request",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			  id: "ANN0003",
  			  date: new Date(2020, 10, 16),
  			  description: '<strong>Jane Eyre</strong> has requested a <strong>Data Entry</strong> role for <strong>Entity Registration</strong>'
    	},
    	{
      	  text: "Assign Role Request",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			  id: "ANN0003",
  			  date: new Date(2020, 10, 16),
  			  description: '<strong>Tom Jones</strong> has requested a <strong>Entity</strong> role for <strong>Entity Registration</strong>'
    	},
    	{
      	  text: "Assign Role Request",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			  id: "ANN0003",
  			  date: new Date(2020, 10, 16),
  			  description: '<strong>Jane Eyre</strong> has requested a <strong>Data Entry</strong> role for <strong>Entity Registration</strong>'
    	}

    ];

  constructor() { }

  getFeedItems(): Observable<FeedItem[]> {
      return of(this.requests);
  }
}
