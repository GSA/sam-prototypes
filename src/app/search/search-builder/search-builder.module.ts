import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import {
  SdsPageModule,
  SdsSearchModule
} from '@gsa-sam/components';

import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { SearchBuilderRoutingModule } from './search-builder-routing.module';
import { SearchBuilderComponent } from './search-builder.component';

@NgModule({
  declarations: [SearchBuilderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    SdsPageModule,
    SdsSearchModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    SearchBuilderRoutingModule
  ],
  exports: [SearchBuilderComponent]
})
export class SearchBuilderModule { }
