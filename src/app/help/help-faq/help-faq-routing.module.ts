import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpFaqComponent } from './help-faq.component';

const routes: Routes = [
	{
		path: '',
		component: HelpFaqComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpFaqRoutingModule { }
