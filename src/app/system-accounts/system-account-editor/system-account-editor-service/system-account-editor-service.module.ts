import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAccountsServiceModule } from '../../../services/system-accounts-service/system-accounts-service.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SystemAccountsServiceModule
  ]
})
export class SystemAccountEditorServiceModule { }
