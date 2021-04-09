import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsSideNavigationModule } from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { AppLayoutModule } from '../app-layout/app-layout.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsSubheaderModule,
    AppLayoutModule,
    ProfileRoutingModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
