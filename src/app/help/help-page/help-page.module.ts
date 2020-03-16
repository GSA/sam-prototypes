import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HelpPageRoutingModule } from './help-page-routing.module';
import { HelpPageComponent } from './help-page.component';

@NgModule({
  declarations: [HelpPageComponent],
  imports: [
    CommonModule,
    HelpPageRoutingModule,
    FontAwesomeModule
  ],
  exports: [HelpPageComponent]
})
export class HelpPageModule { }
