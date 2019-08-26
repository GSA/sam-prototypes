import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule
} from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';

import { SearchListServiceModule } from '@gsa-sam/layouts';

import { FormlyModule } from '@ngx-formly/core';
import { FormsModule } from '@angular/forms';

import { HelpServiceModule } from './service/service.module';
import { HelpItemModule } from './help-item/help-item.module';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [LibraryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    FormsModule,
    SdsToolbarModule,
    SdsPageModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SearchListServiceModule,
    SdsFiltersModule,
    LibraryRoutingModule,
    HelpServiceModule,
    HelpItemModule
  ],
  exports: [LibraryComponent]
})
export class LibraryModule { }
