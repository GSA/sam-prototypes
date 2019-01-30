import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule'
  },
  {
    path: 'help',
    loadChildren: './help/help.module#HelpModule'
  },
  {
    path: 'contracting',
    loadChildren: './contracting/contracting-home/contracting-home.module#ContractingHomeModule'
  }, 
  {
    path: 'assistance',
    loadChildren: './assistance/assistance-home/assistance-home.module#AssistanceHomeModule'
  },
  {
    path: 'entities',
    loadChildren: './entities/entities-home/entities-home.module#EntitiesHomeModule'
  },
  {
    path: 'evaluation',
    loadChildren: './performance/performance-data/performance-data.module#PerformanceDataModule'
  },
  {
    path: 'navigate',
    loadChildren: './navigate/navigate.module#NavigateModule'
  },
  {
    path: 'requests',
    loadChildren: './request/request.module#RequestModule'
  },
  {
    path: 'messages',
    loadChildren: './feed/feed.module#FeedModule'
  },
  {
    path: 'search',
    loadChildren: './sam-ui-patterns/sam-search/sam-search.module#SamSearchModule'
  },
  {
    path: 'entities-workspace',
    loadChildren: './entities/entities-workspace/entities-workspace.module#EntitiesWorkspaceModule'
  },
  {
    path: 'databank',
    loadChildren: './databank/databank-home/databank-home.module#DatabankHomeModule'
  },
  {
    path: '*',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
