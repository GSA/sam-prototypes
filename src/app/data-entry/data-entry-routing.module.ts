import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardComponent } from "./card/card.component";
import { DataEntryComponent } from "./data-entry.component";
import { ReviewSubmitComponent } from "./review-submit/review-submit.component";

const routes: Routes = [
  {
    path: '',
    component: DataEntryComponent,
    children: [
      {
				path: '',
				redirectTo: 'review-contract',
				pathMatch: 'full'
			},
      {
        path: 'reviewSubmit',
        component: ReviewSubmitComponent,
      },
      {
        path: "subaward",
        loadChildren: () =>
          import("./subaward-data/subaward-data.module").then(
            (m) => m.SubawardDataModule
          ),
      },
      {
        path: "review-contract",
        loadChildren: () =>
          import("./review-contract/review-contract.module").then(
            (m) => m.ReviewContractModule
          ),
      },
      {
        path: "review-details",
        loadChildren: () =>
          import("./review-details/review-details.module").then(
            (m) => m.ReviewDetailsModule
          ),
      }
    ]
  }


  //add one more lazyloaded module for review& submit
  // {
  //   path: "data-entry-home",
  //   loadChildren: () =>
  //     import("./data-entry-home/data-entry-home.module").then(
  //       (m) => m.DataEntryHomeModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryRoutingModule { }
