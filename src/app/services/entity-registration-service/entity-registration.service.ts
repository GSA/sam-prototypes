import { Injectable } from '@angular/core';
import { EntityRegistrationServiceModule } from './entity-registration-service.module';
import { registrationData } from './registration.data';

@Injectable({
  providedIn: EntityRegistrationServiceModule
})
export class EntityRegistrationService {

  data: any[];

  constructor() {
  	this.initData(registrationData._embedded.results);
  }

  public getRecord(uei): any {
     for(let i=0; i<this.data.length; i++) {
       if(this.data[i].dunsNumber == uei) {
           return this.data[i];
       }
     }
     return null;
  }

  private initData(data: any[]) {
  	this.data = data;
  }

}

