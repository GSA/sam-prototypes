import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { SamToolsModule } from './sam-ui-elements/tools/tools.module';
import { SamFederalSiteBannerModule } from './sam-components/sam-federal-site-banner/sam-federal-site-banner.module';
//import { SamHeaderModule } from './sam-components/sam-header/sam-header.module';
import { SamSubheaderModule } from './sam-components/sam-subheader/sam-subheader.module';
//import { SamFooterModule } from './sam-components/sam-footer/sam-footer.module';
import { SamSidebarModule } from './sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { AppComponent } from './app.component';
import { SamModelService } from './model/sam-model.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { reducers, metaReducers } from './store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicWorkspaceComponent } from './workspace/public-workspace.component';
import { SdsHeaderModule, SdsFooterModule } from '@gsa-sam/components';
import { FormlyModule } from '@ngx-formly/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sdsIcons } from '@gsa-sam/components';


const appIcons = {
  // App Specific Icons
 };

@NgModule({
  declarations: [
    AppComponent,
    PublicWorkspaceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SamFederalSiteBannerModule,
    SamToolsModule,
    SdsHeaderModule,
    SamSubheaderModule,
    SdsFooterModule,
    SamSidebarModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    FormlyModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PublicWorkspaceComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [SamModelService]
    };
  }
  constructor() {
   library.add(sdsIcons, appIcons);
  }
}
