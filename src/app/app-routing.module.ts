import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'entities',
    loadChildren: './entities/entities-home/entities-home.module#EntitiesHomeModule'
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
    path: 'feed',
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
