import { Injectable } from '@angular/core';
import { EntityThreeSixtyServiceModule } from './entity-three-sixty-service.module';

import { EntityRegistrationService } from '../../services/entity-registration-service/entity-registration.service';

@Injectable({
  providedIn: 'EntityThreeSixtyServiceModule'
})
export class EntityThreeSixtyService {
  private _registration: any;

  public get registration() {
  	return this._registration;
  }

  public setRegistrationById(id: string) {
    this._registration = this.registrationService.getRecord(id);
  }

  constructor(private registrationService: EntityRegistrationService) { }

}