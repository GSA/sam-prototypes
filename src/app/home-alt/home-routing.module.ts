import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAltComponent } from './home-alt.component';

const routes: Routes = [
	{
		path: '',
		component: HomeAltComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
