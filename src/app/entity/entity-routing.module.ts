import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityComponent } from './entity.component';

const routes: Routes = [
  {
    path: '',
    component: EntityComponent,
    children: [
      {
        path: 'start',
          loadChildren: () => import("./entity-start/entity-start.module").then((m) => m.EntityStartModule) 
      },
      {
        path: 'dashboard',
          loadChildren: () => import("./entity-dashboard/entity-dashboard.module").then((m) => m.EntityDashboardModule) 
      },
      {
        path: 'business',
          loadChildren: () => import("./validate-business-information/validate-business-information.module").then((m) => m.ValidateBusinessInformationModule) 
      },
      {
        path: 'cage',
          loadChildren: () => import("./validate-cage-information/validate-cage-information.module").then((m) => m.ValidateCageInformationModule) 
      },
      {
        path: 'relationships',
          loadChildren: () => import("./validate-entity-relationships/validate-entity-relationships.module").then((m) => m.ValidateEntityRelationshipsModule) 
      },
      {
        path: 'tax',
          loadChildren: () => import("./validate-tax-information/validate-tax-information.module").then((m) => m.ValidateTaxInformationModule) 
      },
      {
        path: 'financial',
          loadChildren: () => import("./enter-financial-information/enter-financial-information.module").then((m) => m.EnterFinancialInformationModule) 
      },
      {
        path: 'legal',
          loadChildren: () => import("./enter-legal-information/enter-legal-information.module").then((m) => m.EnterLegalInformationModule) 
      },
      {
        path: 'employee',
          loadChildren: () => import("./enter-employee-information/enter-employee-information.module").then((m) => m.EnterEmployeeInformationModule) 
      }

    ]
  },
  {
    path: 'identify',
    loadChildren: () => import("./find-duplicate-entity/find-duplicate-entity.module").then((m) => m.FindDuplicateEntityModule) 
  },
  {
    path: ':id',
    component: EntityComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoutingModule { }
