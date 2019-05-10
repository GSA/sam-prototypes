import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    data: {
      id: ""
    }
  },
  {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule',
    data: {
      id: "workspace"
    }

  },
  {
    path: 'help',
    loadChildren: './help/help.module#HelpModule',
    data: {
      id: "help"
    }
  },
  {
    path: 'contracting',
    loadChildren: './contracting/contracting-home/contracting-home.module#ContractingHomeModule',
    data: {
      id: "unknown:entities-workspace"
    }
  },
  {
    path: 'entities',
    loadChildren: './entities/entities-home/entities-home.module#EntitiesHomeModule',
    data: {
      id: "unknown:entities"
    }
  },
  {
    path: 'evaluation',
    loadChildren: './performance/performance-data/performance-data.module#PerformanceDataModule',
    data: {
      id: "unknown:evaluation"
    }
  },
  {
    path: 'navigate',
    loadChildren: './navigate/navigate.module#NavigateModule',
    data: {
      id: "unknown:navigate"
    }
  },
  {
    path: 'requests',
    loadChildren: './request/request.module#RequestModule',
    data: {
      id: "request"
    }
  },
  {
    path: 'messages',
    loadChildren: './feed/feed.module#FeedModule',
    data: {
      id: "messages"
    }
  },
  {
    path: 'search',

    loadChildren: './search/sam-search.module#SamSearchModule',
    data: {
      id: "search"
    }
  },
  {
    path: 'entities-workspace',
    loadChildren: './entities/entities-workspace/entities-workspace.module#EntitiesWorkspaceModule',
    data: {
      id: "unknown:entities-workspace"
    }
  },
  {
    path: 'databank',
    loadChildren: './databank/databank.module#DatabankModule',
    data: {
      id: "databank"
    }
  },
  {
    path: 'dataservices',
    loadChildren: './data-services/data-services.module#DataServicesModule',
    data: {
      id: "dataService"
    }
  },
  {
    path: '*',
    redirectTo: '/',
    pathMatch: 'full',
    data: {
      id: ""
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
