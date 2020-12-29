import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { A11yModule } from '@angular/cdk/a11y';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SamModelService } from './model/sam-model.service';
import { HelpService } from './help/service/help.service';
import { HelpFiltersService } from './help/help-filters/help-filters.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SdsCollapseModule, SdsDirectivesModule, SdsIconModule } from '@gsa-sam/components';
import { SdsHeaderModule, SdsFooterModule } from '@gsa-sam/layouts';
import { FormlyModule } from '@ngx-formly/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    A11yModule,
    AppRoutingModule,
    SdsHeaderModule,
    SdsFooterModule,
    SdsCollapseModule,
    SdsDirectivesModule,
    FormlyModule,
    FontAwesomeModule,
    SdsIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: [SamModelService, HelpService, HelpFiltersService]
    };
  }
  constructor() {
   library.add(fas, sds);
  }
}
