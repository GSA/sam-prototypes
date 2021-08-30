import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemAccountRequestComponent } from './system-account-request.component';

const routes: Routes = [
  {
    path: ':id',
    component: SystemAccountRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountRequestRoutingModule { }
