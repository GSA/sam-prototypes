import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from './user-profile';
import { Role } from './role';
import { RoleAssignment } from './role-assignment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  	UserProfile,
  	Role,
  	RoleAssignment
  ]
})
export class UserModule { }
