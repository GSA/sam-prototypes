import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [
  {
      path: '',
	  component: AboutComponent,
	  children: [
			{
				path: '',
				redirectTo: 'about'
			},
			{
			path: 'partners',
			loadChildren: () => import ('./partners/partners.module').then(m => m.PartnersModule),
				data: {
				  id: "home"
				}
			},
			{
			path: 'fsd',
			loadChildren: () => import ('./fsd/fsd.module').then(m => m.FsdModule),
				data: {
				  id: "home"
				}
			},
			{
			path: 'release-notes',
			loadChildren: () => import ('./release-notes/release-notes.module').then(m => m.ReleaseNotesModule),
				data: {
				  id: "home"
				}
			},
			{
			path: 'about',
			loadChildren: () => import ('./this-site/this-site.module').then(m => m.ThisSiteModule),
				data: {
				  id: "home"
				}
			},
			{
				path: 'external-resources',
				loadChildren: () => import ('./external-resources/external-resources.module').then(m => m.ExternalResourcesModule),
			},
			{
			path: 'community',
			loadChildren: () => import ('./community/community.module').then(m => m.CommunityModule),
				data: {
				  id: "home"
				}
			},
			{
				path: 'policies',
				loadChildren: () => import ('./policies/policies.module').then(m => m.PoliciesModule),
				data: {
				  id: "home"
				}
			},
			{
				path: 'contact',
				loadChildren: () => import ('./contact/contact.module').then(m => m.ContactModule),
				data: {
				  id: "home"
				}
			}
  	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
