import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAccountEditorComponent } from './system-account-editor.component';

const routes: Routes = [
  {
    path: '',
    component: SystemAccountEditorComponent,
    children: [
      {
        path: 'review',
          loadChildren: () => import("./system-account-review/system-account-review.module").then((m) => m.SystemAccountReviewModule) 
      },
      {
        path: 'edit',
          loadChildren: () => import("./system-account-form/system-account-form.module").then((m) => m.SystemAccountFormModule) 
      }
    ]
  },
  {
    path: ':id',
    component: SystemAccountEditorComponent,
    children: [
      {
        path: 'review',
          loadChildren: () => import("./system-account-review/system-account-review.module").then((m) => m.SystemAccountReviewModule) 
      },
      {
        path: 'edit',
          loadChildren: () => import("./system-account-form/system-account-form.module").then((m) => m.SystemAccountFormModule) 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAccountEditorRoutingModule { }
