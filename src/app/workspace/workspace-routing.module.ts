import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';
// import { WorkspaceGuard } from './workspace-guard';

const routes: Routes = [
	{
		path: '',
		component: WorkspaceComponent
	},
	{
		path: 'registrations',
		loadChildren: () => import('./entities/entities.module').then(m => m.EntitiesModule),
		data: {
			sideId: 'registrations'
		}
	},
	{
		path: 'assistancelist',
		loadChildren: () => import('./assistancelist/assistancelist.module').then(m => m.AssistancelistModule),
		data: {
			sideId: 'assistancelist'
		}

	},
	{
		path: 'opportunities',
		loadChildren: () => import('./opportunities/opportunities.module').then(m => m.OpportunitiesModule),
		data: {
			sideId: 'opportunities'
		}
	},
	{
		path: 'system-accounts',
		loadChildren: () => import('../system-accounts/system-accounts.module').then(m => m.SystemAccountsModule),
		data: {
			id: 'workspace'
		}
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
