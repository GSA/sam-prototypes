import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSearchRoutingModule } from './sam-search-routing.module';
import { SamSidebarModule } from '../../sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { SamListModule } from '../../sam-ui-elements/sam-list/sam-list.module';
import { SearchServiceModule } from './service/service.module';
import { SamSearchComponent } from './sam-search.component';

@NgModule({
  imports: [
    CommonModule,
    SamSearchRoutingModule,
    SamListModule,
    SamSidebarModule,
    SearchServiceModule.forRoot()
  ],
  exports: [
  	SamSearchComponent
  ],
  declarations: [SamSearchComponent]
})
export class SamSearchModule { }
