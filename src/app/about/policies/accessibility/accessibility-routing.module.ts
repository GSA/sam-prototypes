import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessibilityComponent } from './accessibility.component';

const routes: Routes = [
	{
		path: '',
		component: AccessibilityComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessibilityRoutingModule { }
