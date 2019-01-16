import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SamSidebarModule } from '../sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { SamListModule } from '../sam-ui-elements/sam-list/sam-list.module';
import { SamSearchInputModule } from '../sam-ui-elements/sam-search-input/sam-search-input.module';
import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SamSidebarModule,
    SamListModule,
    SamSearchInputModule,
    HelpRoutingModule
  ],
  declarations: [HelpComponent]
})
export class HelpModule { }
