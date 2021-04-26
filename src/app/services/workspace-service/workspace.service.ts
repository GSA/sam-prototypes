import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { WorkspaceSummary } from '../interfaces/workspace.interface';

import { WorkspaceServiceModule } from './workspace-service.module';

@Injectable({
	providedIn: WorkspaceServiceModule
})
export class WorkspaceService {

  _workspaces: Observable<WorkspaceSummary[]> = of([
  	{
  		key: 'opportunities',
  		title: 'Contract Opportunities'
  	},
  	{
  		key: 'assistanceListings',
  		title: 'Assistance Listings'
  	},
  	{
  		key: 'entityRegistration',
  		title: 'Entity Registration'
  	},
  	{
  		key: 'entityReporting',
  		title: 'Entity Reporting'
  	},
  	{
  		key: 'cba',
  		title: 'Collective Bargaining Agreements'
  	},
  	{
  		key: 'systemAccounts',
  		title: 'System Accounts'
  	},
  	{
  		key: 'federalHierarchy',
  		title: 'Federal Hierarchy'
  	},
  	{
  		key: 'userDirectory',
  		title: 'User Directory'
  	}
  ]);

  constructor() { }

  get workspaces(): Observable<WorkspaceSummary[]> {
  	  return this._workspaces;
  }

}
