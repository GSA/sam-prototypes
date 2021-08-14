import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IsAuthenticated } from "./security/is-authenticated";
import { GoBackTest } from './go-back-test';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
    data: {
      id: "home",
    },
  },
  {
    path: "home",
    loadChildren: () =>
      import("./landing/landing.module").then((m) => m.LandingModule),
    data: {
      id: "home",
    },
  },
  {
    path: "workspace",
    loadChildren: () =>
      import("./workspace/workspace.module").then((m) => m.WorkspaceModule),
    canActivate: [IsAuthenticated],
    data: {
      id: "workspace",
    },
  },
  {
    path: "requests",
    loadChildren: () =>
      import("./request/request.module").then((m) => m.RequestModule),
    data: {
      id: "requests",
    },
  },
  {
    path: "alerts",
    loadChildren: () =>
      import("./alerts/alerts.module").then((m) => m.AlertsModule),
    data: {
      id: "home",
    },
  },
  {
    path: "notifications",
    loadChildren: () => import("./notifications/notifications.module").then((m) => m.NotificationsModule),
    data: {
      id: "notifications",
    },
  },
  {
    path: "search",

    loadChildren: () =>
      import("./search/search.module").then((m) => m.SearchModule),
    data: {
      id: "search",
    },
  },
  {
    path: "databank",
    loadChildren: () =>
      import("./databank/databank.module").then((m) => m.DatabankModule),
    data: {
      id: "databank",
    },
  },
  {
    path: "dataservices",
    loadChildren: () =>
      import("./data-services/data-services.module").then(
        (m) => m.DataServicesModule
      ),
    data: {
      id: "dataservices",
    },
  },
  {
    path: "help",
    loadChildren: () => import("./help/help.module").then((m) => m.HelpModule),
    data: {
      id: "help",
    },
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((m) => m.AboutModule),
    data: {
      id: "help",
    },
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),    
    data: {
      id: "workspace",
    },
  },
  {
    path: "federal-hierarchy",
    loadChildren: () =>
      import("./federal-hierarchy/federal-hierarchy.module").then((m) => m.FederalHierarchyModule),    
    data: {
      id: "workspace",
    },
  },
  {
    path: "entity360",
    loadChildren: () =>
      import("./entity-three-sixty/entity-three-sixty.module").then((m) => m.EntityThreeSixtyModule),    
    data: {
      id: "search",
    },
  },
  {
    path: "entity-registration",
    loadChildren: () =>
      import("./entity-registration/entity-registration.module").then(
        (m) => m.EntityRegistrationModule
      ),
    data: {
      id: "workspace",
    },
  },
  {
    path: "integrity",
    loadChildren: () =>
      import("./integrity/integrity.module").then((m) => m.IntegrityModule),
  },
  {
    path: "entity-reporting",
    loadChildren: () =>
      import("./entity-reporting/entity-reporting.module").then((m) => m.EntityReportingModule),
    data: {
      id: "workspace"
    }
  },
  {
    path: "responsibility-qualification",
    loadChildren: () =>
      import("./responsibility-qualification/responsibility-qualification.module").then((m) => m.ResponsibilityQualificationModule),
    data: {
      id: "workspace",
    },
  },
  {
    path: "system-accounts",
    loadChildren: () =>
      import("./system-accounts/system-accounts.module").then((m) => m.SystemAccountsModule),
    data: {
      id: "workspace",
    },
  },
  {
    path: "signout",
    pathMatch: "full",
    redirectTo: "/",
  },
  {
    path: "*",
    redirectTo: "/",
    pathMatch: "full",
    data: {
      id: "",
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      useHash: true,
      anchorScrolling: "enabled",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
