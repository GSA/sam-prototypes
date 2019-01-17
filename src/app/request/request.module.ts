import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSearchInputModule } from '../sam-ui-elements/sam-search-input/sam-search-input.module';
import { SamSidebarModule } from '../sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';

@NgModule({
  imports: [
    CommonModule,
    SamSearchInputModule,
    SamSidebarModule,
    RequestRoutingModule
  ],
  declarations: [RequestComponent]
})
export class RequestModule { }
