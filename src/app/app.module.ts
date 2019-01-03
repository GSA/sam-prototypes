import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { SamToolsModule } from './sam-ui-elements/tools/tools.module';
import { SamHeaderModule } from './sam-components/sam-header/sam-header.module';
import { SamSubheaderModule } from './sam-components/sam-subheader/sam-subheader.module';
import { SamFooterModule } from './sam-components/sam-footer/sam-footer.module';
import { SamSidebarModule } from './sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { AppComponent } from './app.component';
import { SamModelModule } from './model/model.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { reducers, metaReducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,    
    SamToolsModule,
    SamHeaderModule,
    SamSubheaderModule,
    SamFooterModule,
    SamSidebarModule,
    SamModelModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
