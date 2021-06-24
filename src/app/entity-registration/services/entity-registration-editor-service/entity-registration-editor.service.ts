import { Injectable } from '@angular/core';
import { EntityRegistrationEditorServiceModule } from './entity-registration-editor-service.module';
import { DataEntryNavigationLink, DataEntryUiService } from '../../../app-layout/data-entry-layout/data-entry-ui.service';

import { EntityRegistrationService } from '../../../services/entity-registration-service/entity-registration.service';

import { purposeOfRegistrationLinks } from './purpose-of-registration.fields';

@Injectable({
  providedIn: EntityRegistrationEditorServiceModule
})
export class EntityRegistrationEditorService extends DataEntryUiService {

  private _registration: any;

  private _links: DataEntryNavigationLink[] = [
    purposeOfRegistrationLinks
  ];

  get links() : DataEntryNavigationLink[] {
    return this._links;
  }

  public get registration() {
  	return this._registration;
  }

  public setRegistrationById(id: string) {
    this._registration = this.registrationService.getRecord(id);
  }

  constructor(private registrationService: EntityRegistrationService) { 
    super();
  }

}
