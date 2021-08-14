import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

import { SystemAccountsServiceModule } from '../../../services/system-accounts-service/system-accounts-service.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconModule,
    SystemAccountsServiceModule
  ]
})
export class SystemAccountEditorServiceModule { }
