import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataEntryComponent } from "./data-entry.component";
import { DataEntryReportComponent } from "./report/report.component";
import { ReviewSubmitComponent } from "./review-submit/review-submit.component";

const routes: Routes = [
  {
    path: "",
    component: DataEntryComponent,
    children: [
      {
        path: "",
        redirectTo: "review-contract",
        pathMatch: "full",
      },
      {
        path: "reviewSubmit",
        component: ReviewSubmitComponent,
      },
    ],
  },
  {
    path: "report",
    component: DataEntryReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataEntryRoutingModule { }
