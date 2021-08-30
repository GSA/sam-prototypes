import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { A11yModule } from "@angular/cdk/a11y";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {
  SdsExternalLinkDirectivesModule,
  SdsToastComponent,
  SdsToastModule,
  SdsToastSettings
} from "@gsa-sam/components";
import { SdsHeaderModule, SdsFooterModule } from "@gsa-sam/layouts";
import { FormlyModule } from "@ngx-formly/core";

import { AppLayoutModule } from "./app-layout/app-layout.module";
import { AppService } from "./services/app-service/app.service";
import { SystemAccountsService } from "./services/system-accounts-service/system-accounts.service";
import { SystemAccountEditorService } from "./system-accounts/system-account-editor/system-account-editor-service/system-account-editor.service"; 
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    A11yModule,
    AppRoutingModule,
    AppLayoutModule,
    SdsExternalLinkDirectivesModule,
    FormlyModule,
    SdsToastModule,
    ToastrModule.forRoot(SdsToastSettings),
  ],
  providers: [],
  entryComponents: [SdsToastComponent],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: [AppService, SystemAccountsService, SystemAccountEditorService],
    };
  }
  constructor() { }
}
