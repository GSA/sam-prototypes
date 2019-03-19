import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunitiesComponent } from './opportunities.component';
import { OpportunitiesRoutingModule } from './opportunities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OpportunitiesRoutingModule
  ],
  declarations: [OpportunitiesComponent],
  exports: [OpportunitiesComponent]
})
export class OpportunitiesModule { }
