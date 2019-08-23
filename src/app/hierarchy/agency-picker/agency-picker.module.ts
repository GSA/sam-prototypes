import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SdsAutocompleteModule } from '@gsa-sam/components';


import { AgencyPickerComponent } from './agency-picker.component';

@NgModule({
  declarations: [AgencyPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SdsAutocompleteModule
  ],
  exports: [AgencyPickerComponent]


})
export class AgencyPickerModule { }
