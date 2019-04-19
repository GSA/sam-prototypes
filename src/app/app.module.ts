import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { SamToolsModule } from './sam-ui-elements/tools/tools.module';
import { SamFederalSiteBannerModule } from './sam-components/sam-federal-site-banner/sam-federal-site-banner.module';
import { SamHeaderModule } from './sam-components/sam-header/sam-header.module';
import { SamSubheaderModule } from './sam-components/sam-subheader/sam-subheader.module';
import { SamFooterModule } from './sam-components/sam-footer/sam-footer.module';
import { SamSidebarModule } from './sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { AppComponent } from './app.component';
import { SamModelService } from './model/sam-model.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { reducers, metaReducers } from './store/reducers';
import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PublicWorkspaceComponent } from './workspace/public-workspace.component';
import { FormlyModule } from '@ngx-formly/core';
import {FormlySAMUIModule} from '@gsa-sam/sam-ui-elements/src/formly';

@NgModule({
  declarations: [
    AppComponent,
    PublicWorkspaceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SamFederalSiteBannerModule,
    SamToolsModule,
    SamHeaderModule,
    SamSubheaderModule,
    SamFooterModule,
    SamSidebarModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    SamUIKitModule,
    FormlyModule,
    FormlySAMUIModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PublicWorkspaceComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [ SamModelService ]
    };
  }
}
