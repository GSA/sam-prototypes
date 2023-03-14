import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindDuplicateEntityComponent } from './find-duplicate-entity.component';

const routes: Routes = [
  {
    path: '',
    component: FindDuplicateEntityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindDuplicateEntityRoutingModule { }
