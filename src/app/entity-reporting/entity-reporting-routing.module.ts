import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "reporting",
    loadChildren: () =>
      import("./reporting-workspace/reporting-workspace.module").then((m) => m.ReportingWorkspaceModule),
  },
  {
    path: "awards",
    loadChildren: () =>
      import("./award-workspace/award-workspace.module").then((m) => m.AwardWorkspaceModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityReportingRoutingModule { }
