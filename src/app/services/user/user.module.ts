import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from './user-profile';
import { Role } from './role';
import { RoleAssignment } from './role-assignment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserProfile,
    Role,
    RoleAssignment
  ],
  exports: [
  	UserProfile,
  	Role,
  	RoleAssignment
  ]
})
export class UserModule { }
