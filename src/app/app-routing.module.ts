import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IsAuthenticated } from "./security/is-authenticated";
import { GoBackTest } from './go-back-test';

const routes: Routes = [
  {
    path: "hierarchy",
    loadChildren: () =>
      import("./hierarchy/hierarchy.module").then((m) => m.HierarchyModule),
    data: {
      id: "home",
    },
  },
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
    path: "news",
    loadChildren: () => import("./news/news.module").then((m) => m.NewsModule),
    data: {
      id: "home",
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
    path: "messages",
    loadChildren: () => import("./feed/feed.module").then((m) => m.FeedModule),
    data: {
      id: "messages",
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
    path: "dataentry",
    loadChildren: () =>
      import("./data-entry/data-entry.module").then((m) => m.DataEntryModule),
  },
  {
    path: "entity-reporting",
    loadChildren: () =>
      import("./entity-reporting/entity-reporting.module").then((m) => m.EntityReportingModule),
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
