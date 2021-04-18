import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { WorkspaceServiceModule } from './workspace-service.module';

export interface StatisticModel {
    key: string;
	label: string;
	route: string;
	queryParam: any[];
	colorClass: string;
	value: number;
}

export interface StatisticsGroup {
	key: string;
	label: string;
	route: string;
	statistics: StatisticModel[]
}

export interface WorkspaceSummary {
    title: string;
    route: string;
    domain: string;
	statisticsGroups: StatisticsGroup[];
}



@Injectable({
	providedIn: WorkspaceServiceModule
})
export class WorkspaceService {

  _workspaces: Observable<WorkspaceSummary[]> = of([
  	{
  		title: 'Contract Opportunities',
  		domain: 'opportunities',
  		route: '/workspace/opportunities',
  		statisticsGroups: [
  		    {
	  			key: 'statusStatistics',
	  			label: 'Opportunities by Status',
	  			route: '',
	  			statistics: [
	  				{
	  					key: 'active',
	  					label: 'Active',
	  					route: '/workspace/opportunities',
	  					queryParam: [ { status: 'active' }],
	  					colorClass: 'green',
	  					value: 15
	  				},
	   				{
	  					key: 'draft',
	  					label: 'Draft',
	  					route: '/workspace/opportunities',
	  					queryParam: [ { status: 'draft' }],
	  					colorClass: 'blue',
	  					value: 2
	  				}			
	  			]
  			}
  		]
  	},
  	{
  		title: 'Assistance Listings',
  		domain: 'assistanceListings',
  		route: '/workspace/assistancelist',
  		statisticsGroups: [
  		    {
	  			key: 'statusStatistics',
	  			label: 'Assistance Listings by Status',
	  			route: '',
	  			statistics: [
	  				{
	  					key: 'published',
	  					label: 'Published',
	  					route: '/workspace/assistancelist',
	  					queryParam: [ { status: 'published' }],
	  					colorClass: 'green',
	  					value: 110
	  				},
	   				{
	  					key: 'draft',
	  					label: 'Draft',
	  					route: '/workspace/assistancelist',
	  					queryParam: [ { status: 'draft' }],
	  					colorClass: 'blue',
	  					value: 12
	  				},	
	   				{
	  					key: 'rejected',
	  					label: 'Rejected',
	  					route: '/workspace/assistancelist',
	  					queryParam: [ { status: 'rejected' }],
	  					colorClass: 'red',
	  					value: 1
	  				},
	   				{
	  					key: 'overdue',
	  					label: 'Rejected',
	  					route: '/workspace/assistancelist',
	  					queryParam: [ { status: 'overdue' }],
	  					colorClass: 'orange',
	  					value: 23
	  				}				
	  			]
  			}
  		]
  	},
  	{
  		title: 'Entity Registration',
  		domain: 'entityRegistration',
  		route: '/entity-registration/workspace',
  		statisticsGroups: [
  		    {
	  			key: 'statusStatistics',
	  			label: 'Entity Registrations by Status',
	  			route: '',
	  			statistics: [
	  				{
	  					key: 'active',
	  					label: 'Active',
	  					route: '/entity-registration/workspace',
	  					queryParam: [ { status: 'published' }],
	  					colorClass: 'green',
	  					value: 10
	  				},
	   				{
	  					key: 'draft',
	  					label: 'Draft',
	  					route: '/entity-registration/workspace',
	  					queryParam: [ { status: 'draft' }],
	  					colorClass: 'grey',
	  					value: 1
	  				},	
	   				{
	  					key: 'wip',
	  					label: 'Work In Progress',
	  					route: '/entity-registration/workspace',
	  					queryParam: [ { status: 'wip' }],
	  					colorClass: 'blue',
	  					value: 1
	  				},
	   				{
	  					key: 'submitted',
	  					label: 'Submitted',
	  					route: '/entity-registration/workspace',
	  					queryParam: [ { status: 'submitted' }],
	  					colorClass: 'yellow',
	  					value: 23
	  				},
	   				{
	  					key: 'expired',
	  					label: 'Expired',
	  					route: '/entity-registration/workspace',
	  					queryParam: [ { status: 'expired' }],
	  					colorClass: 'red',
	  					value: 23
	  				}					
	  			]
  			}
  		]
  	}
  ]);

  constructor() { }

  get workspaces(): Observable<WorkspaceSummary[]> {
  	  return this._workspaces;
  }

}
