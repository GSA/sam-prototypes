import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SdsActionsMenuModule } from '@gsa-sam/layouts';


import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule
} from '@gsa-sam/components';

import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';
import { FormlyModule } from '@ngx-formly/core';

import { AssistancelistRoutingModule } from './assistancelist-routing.module';
import { AssistancelistComponent } from './assistancelist.component';
import { AssistancelistItemModule } from './assistancelist-item/assistancelist-item.module';

@NgModule({
  declarations: [AssistancelistComponent],
  imports: [
    CommonModule,
    AssistancelistRoutingModule,
    FormsModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsFiltersModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    AssistancelistItemModule,
    FormlyModule
  ],
  exports: [AssistancelistComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class AssistancelistModule { }
