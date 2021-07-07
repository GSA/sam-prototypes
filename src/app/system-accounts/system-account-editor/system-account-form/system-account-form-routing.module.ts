import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountFormComponent } from './system-account-form.component';

const routes: Routes = [
  {
      path: '',
      component: SystemAccountFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountFormRoutingModule { }
