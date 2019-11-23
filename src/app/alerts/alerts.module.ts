import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsSubheaderModule, SearchListServiceModule  } from '@gsa-sam/layouts';  

import {
  	SdsToolbarModule,
  	SdsAccordionModule,
  	SdsPageModule,
  	SdsSearchModule
  } from '@gsa-sam/components';

import { AlertDataModule } from './alert-data/alert-data.module';
import { AlertItemModule } from './alert-item/alert-item.module';
import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsComponent } from './alerts.component';

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSubheaderModule, 
    SearchListServiceModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    AlertDataModule,
    AlertItemModule,
    AlertsRoutingModule
  ],
  exports: [AlertsComponent]
})
export class AlertsModule { }
