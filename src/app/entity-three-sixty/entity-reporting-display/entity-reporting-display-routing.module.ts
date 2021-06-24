import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityReportingDisplayComponent } from './entity-reporting-display.component';

const routes: Routes = [
  {
    path: '',
    component: EntityReportingDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityReportingDisplayRoutingModule { }
