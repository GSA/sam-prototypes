import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerServiceRoutingModule } from './customer-service-routing.module';
import { CustomerServiceComponent } from './customer-service.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerServiceRoutingModule
  ],
  declarations: [CustomerServiceComponent],
  exports: [CustomerServiceComponent]
})
export class CustomerServiceModule { }
