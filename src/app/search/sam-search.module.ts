import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSearchRoutingModule } from './sam-search-routing.module';
import { SamSidebarModule } from '../sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { SamListModule } from '../sam-ui-elements/sam-list/sam-list.module';
import { SamSearchInputModule } from '../sam-ui-elements/sam-search-input/sam-search-input.module';
import { SamLinkModule } from '../sam-ui-elements/sam-link/sam-link.module';
import { SamLinkListModule } from '../sam-ui-elements/sam-link-list/sam-link-list.module';
import { SamBodyModule } from '../sam-ui-elements/sam-body/sam-body.module';
import { SearchServiceModule } from './service/service.module';
import { SamSearchComponent } from './sam-search.component';
import { SamUIKitModule, SamFilterModule } from '@gsa-sam/sam-ui-elements';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SamSearchRoutingModule,
    SamUIKitModule,
    SamFilterModule,
    SamSidebarModule,
    SamListModule,
    SamSearchInputModule,
    SamLinkModule,
    SamLinkListModule,
    SamBodyModule,
    FormlyModule,
    FormsModule,
    SearchServiceModule.forRoot()
  ],
  exports: [
  	SamSearchComponent
  ],
  declarations: [SamSearchComponent]
})
export class SamSearchModule { }
