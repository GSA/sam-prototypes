import { Injectable } from '@angular/core';
import { EntityThreeSixtyServiceModule } from './entity-three-sixty-service.module';

import { EntityRegistrationService } from '../../../services/entity-registration-service/entity-registration.service';

@Injectable({
  providedIn: EntityThreeSixtyServiceModule
})
export class EntityThreeSixtyService {
  private _entity: any;

  public get entity() {
  	return this._entity;
  }

  public setEntityById(id: string) {
    this._entity = this.registrationService.getRecord(id);
  }

  constructor(private registrationService: EntityRegistrationService) { }

}