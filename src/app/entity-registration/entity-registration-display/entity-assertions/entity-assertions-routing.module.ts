import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityAssertionsComponent } from './entity-assertions.component';

const routes: Routes = [	
	{
		path: '',
		component: EntityAssertionsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityAssertionsRoutingModule { }
