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
  SdsIconModule,
} from "@gsa-sam/components";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { sds } from "@gsa-sam/sam-styles/src/icons/";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { AppLayoutModule } from './app-layout/app-layout.module';
import { AppService } from './services/app-service/app.service';
import { SamModelService } from './model/sam-model.service';

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
    FontAwesomeModule,
    SdsIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: [SamModelService, AppService],
    };
  }
  constructor() {
    library.add(fas, sds);
  }
}
