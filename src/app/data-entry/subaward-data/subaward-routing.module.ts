import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubawardDataComponent } from "./subaward-data.component";

const routes: Routes = [
  {
    path: "",
    component: SubawardDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubawardRoutingModule {}
