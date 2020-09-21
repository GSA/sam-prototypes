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
		loadChildren: './entities/entities.module#EntitiesModule',
		data: {
			sideId: 'registrations'
		}
	},
	{
		path: 'assistancelist',
		loadChildren: './assistancelist/assistancelist.module#AssistancelistModule',
		data: {
			sideId: 'assistancelist'
		}

	},
	{
		path: 'opportunities',
		loadChildren: './opportunities/opportunities.module#OpportunitiesModule',
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
