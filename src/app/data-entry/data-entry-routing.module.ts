import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
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
  },
  {
    path: "data-entry-home",
    loadChildren: () =>
      import("./data-entry-home/data-entry-home.module").then(
        (m) => m.DataEntryHomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataEntryRoutingModule {}
