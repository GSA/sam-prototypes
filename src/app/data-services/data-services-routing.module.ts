import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataServicesComponent } from './data-services.component';

const routes: Routes = [
	{
		path: '',
		component: DataServicesComponent
	},
	{
		path: 'downloads',
		loadChildren: './downloads/downloads.module#DownloadsModule'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataServicesRoutingModule { }
