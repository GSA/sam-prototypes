import { Injectable } from '@angular/core';
import { EntityRegistrationEditorServiceModule } from './entity-registration-editor-service.module';

import { EntityRegistrationService } from '../../../services/entity-registration-service/entity-registration.service';

@Injectable({
  providedIn: EntityRegistrationEditorServiceModule
})
export class EntityRegistrationEditorService {

  private _registration: any;

  public get registration() {
  	return this._registration;
  }

  public setRegistrationById(id: string) {
    this._registration = this.registrationService.getRecord(id);
  }

  constructor(private registrationService: EntityRegistrationService) { }

}
