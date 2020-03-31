import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchListServiceModule  } from '@gsa-sam/layouts';  

import {
  	SdsSearchModule,
    SdsPageModule
  } from '@gsa-sam/components';

import { HelpSearchRoutingModule } from './help-search-routing.module';
import { HelpSearchComponent } from './help-search.component';
import { HelpItemModule } from '../help-item/help-item.module';
import { HelpServiceModule } from '../service/service.module';

@NgModule({
  declarations: [HelpSearchComponent],
  imports: [
    CommonModule,
    SearchListServiceModule,
    SdsSearchModule,
    SdsPageModule,
    HelpItemModule,
    HelpServiceModule,
    HelpSearchRoutingModule
  ],
  exports: [HelpSearchComponent]
})
export class HelpSearchModule { }
