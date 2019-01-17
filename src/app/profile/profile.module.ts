import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSidebarModule } from '../sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    SamSidebarModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
