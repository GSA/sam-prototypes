import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRolesRoutingModule } from './user-roles-routing.module';
import { UserRolesComponent } from './user-roles.component';

@NgModule({
  imports: [
    CommonModule,
    UserRolesRoutingModule
  ],
  declarations: [UserRolesComponent],
  exports: [UserRolesComponent]
})
export class UserRolesModule { }
