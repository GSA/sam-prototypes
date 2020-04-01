import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hierarchy',
    loadChildren: './hierarchy/hierarchy.module#HierarchyModule',
    data: {
      id: "home"
    }
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    data: {
      id: "home"
    }
  },
  {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule',
    data: {
      id: "home"
    }
  },
  {
    path: 'alt',
    loadChildren: './home-alt/home-alt.module#HomeAltModule',
    data: {
      id: "homealt"
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
    path: 'news',
    loadChildren: './news/news.module#NewsModule',
    data: {
      id: "home"
    }
  },
  {
    path: 'alerts',
    loadChildren: './alerts/alerts.module#AlertsModule',
    data: {
      id: "home"
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

    loadChildren: './search/search-home/search-home.module#SearchHomeModule',
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
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
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
