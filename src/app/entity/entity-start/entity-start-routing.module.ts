import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityStartComponent } from './entity-start.component';

const routes: Routes = [
  {
    path: '',
    component: EntityStartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityStartRoutingModule { }
