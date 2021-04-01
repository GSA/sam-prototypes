import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "subaward",
    loadChildren: () =>
      import("./subaward-data/subaward-data.module").then(
        (m) => m.SubawardDataModule
      ),
    data: {
      id: "dataentry",
    },
  },
  {
    path: "review-contract",
    loadChildren: () =>
      import("./review-contract/review-contract.module").then(
        (m) => m.ReviewContractModule
      ),
    data: {
      id: "dataentry",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataEntryRoutingModule {}
