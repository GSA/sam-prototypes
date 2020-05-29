import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticated } from './security/is-authenticated';

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
    path: 'home',
    loadChildren: './landing/landing.module#LandingModule',
    data: {
      id: "home"
    }
  },
  {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule',
    canActivate: [IsAuthenticated], 
    data: {
      id: "workspace"
    }

  },
  {
    path: 'requests',
    loadChildren: './request/request.module#RequestModule',
    data: {
      id: "requests"
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

    loadChildren: './search/search.module#SearchModule',
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
      id: "dataservices"
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
    path: 'entity-registration',
    loadChildren: './entity-registration/entity-registration.module#EntityRegistrationModule',
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
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
