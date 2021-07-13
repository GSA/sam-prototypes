import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountReviewComponent } from './system-account-review.component';

const routes: Routes = [
  {
    path: '',
    component: SystemAccountReviewComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountReviewRoutingModule { }
