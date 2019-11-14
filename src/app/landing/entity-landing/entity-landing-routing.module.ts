import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityLandingComponent } from './entity-landing.component';

const routes: Routes = [
	{
		path: '',
		component: EntityLandingComponent
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityLandingRoutingModule { }
