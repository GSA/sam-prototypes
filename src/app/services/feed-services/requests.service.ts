import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationMode } from '@gsa-sam/components';
import { FeedServicesModule } from './feed-services.module';
import { RequestItem, FeedItem, FeedItemType, Domain, RequestStatus } from '../interfaces/public-apis';
import { BaseFeedService } from './base-feed-service';

@Injectable({
  providedIn: FeedServicesModule
})
export class RequestsService extends BaseFeedService {
    requests: RequestItem[] = [
    	{
    		  text: "Assign Role Request",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
  			  id: "ANN0001",
          itemType: FeedItemType.Role,
  			  date: new Date(2021, 3, 8),
  			  description: '(blank)',
          domains: [ Domain.ContractOpportunities ],
          status: RequestStatus.Pending,
          updated: new Date(2021, 3, 12),
          data: {
            userName: 'Jane Eyre',
            role: 'Data Entry',
            domain: 'Contract Opportunities'
          }
    	},
      {
          text: "Change Title Request",
          route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
          mode: NavigationMode.EXTERNAL,
          id: "ANN0002",
          itemType: FeedItemType.TitleChange,
          date: new Date(2020, 12, 20),
          description: 'Title change request',
          domains: [ Domain.AssistanceListings ],
          status: RequestStatus.Pending,
          updated: new Date(2021, 3, 12),
          data: {
            userName: 'Oliver Twist',
            listingName: '10.001 - National School Lunch Program'
          }
      },
    	{
      	  text: "Assign Role Request",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			  id: "ANN0003",
          itemType: FeedItemType.Role,
  			  date: new Date(2020, 10, 16),
  			  description: '<strong>Jane Eyre</strong> has requested a <strong>Data Entry</strong> role for <strong>Entity Registration</strong>',
          domains: [ Domain.ContractOpportunities ],
          status: RequestStatus.Pending,
          updated: new Date(2020, 11, 18),
          data: {
            userName: 'Jane Eyre',
            role: 'Data Entry',
            domain: 'Contract Opportunities'
          }
    	},
    	{
      	  text: "Assign Role Request",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			  id: "ANN0004",
          itemType: FeedItemType.Role,
  			  date: new Date(2020, 10, 16),
  			  description: '<strong>Tom Jones</strong> has requested a <strong>Entity</strong> role for <strong>Entity Registration</strong>',
          domains: [ Domain.ContractOpportunities ],
          status: RequestStatus.Pending,
          updated: new Date(2020, 11, 6),
          data: {
            userName: 'Jane Eyre',
            role: 'Data Entry',
            domain: 'Contract Opportunities'
          }
    	},
    	{
      	  text: "Assign Role Request",
      		route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
      		mode: NavigationMode.EXTERNAL,
  			  id: "ANN0005",
          itemType: FeedItemType.Role,
  			  date: new Date(2020, 10, 16),
  			  description: 'Role request',
          domains: [ Domain.ContractOpportunities ],
          status: RequestStatus.Pending,
          updated: new Date(2021, 1, 16),
          data: {
            userName: 'Jane Eyre',
            role: 'Data Entry',
            domain: 'Contract Opportunities'
          }
    	},
      {
          text: "System Account Request",
          route: '/system-accounts/request/SAR-0006',
          mode: NavigationMode.INTERNAL,
          id: "SAR-0006",
          itemType: FeedItemType.SystemAccount,
          date: new Date(2020, 10, 16),
          description: 'System account request',
          domains: [ Domain.ContractOpportunities, Domain.EntityRegistration ],
          status: RequestStatus.Pending,
          updated: new Date(2021, 1, 16),
          data: {
            userName: 'Jane Eyre',
            systemName: 'USDA CWS System 1',
            systemID: '',
            organizationName: 'Department of Agriculture'
          }
      }

    ];

  constructor() { super(); }

  getFeedItems(): FeedItem[] {
      return this.requests;
  }
}
