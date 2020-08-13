import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';
import {
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule,
  SdsSideNavigationModule,
} from '@gsa-sam/components';  

import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsComponent } from './alerts.component';
import { AlertFiltersModule } from './alert-filters/alert-filters.module';
import { HelpItemModule } from '../../help/help-item/help-item.module';
import { AlertItemComponent } from './alert-item/alert-item.component';
import { AlertService } from './alert-service/alert.service';
import { AlertServiceModule } from './alert-service/alert-service.module';
import { SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';

@NgModule({
  declarations: [AlertsComponent, AlertItemComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    FontAwesomeModule,
    AlertFiltersModule,
    SdsSubheaderModule,
    SdsSearchModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSideNavigationModule,
    SdsFiltersModule,
    SearchListServiceModule,
    HelpItemModule,
    AlertServiceModule
  ],
  exports: [AlertsComponent, AlertItemComponent], 
  providers: [AlertService, SDSFormlyUpdateComunicationService]
})
export class AlertsModule { }
