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
    path: 'help',
    loadChildren: './help/help.module#HelpModule',
    data: {
      id: "help"
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
