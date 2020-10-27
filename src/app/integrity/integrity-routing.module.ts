import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'view',
    loadChildren: () => import('./integrity-display/integrity-display.module').then(m => m.IntegrityDisplayModule),
    data: {
      id: "search"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrityRoutingModule { }
