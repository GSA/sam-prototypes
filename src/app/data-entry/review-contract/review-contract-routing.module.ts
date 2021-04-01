import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReviewContractComponent } from "./review-contract.component";

const routes: Routes = [
  {
    path: "review-contract",
    component: ReviewContractComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewContractRoutingModule {}
