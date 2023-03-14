import { Injectable } from '@angular/core';
import { EntityModelModule } from './entity-model.module';

@Injectable({
  providedIn: EntityModelModule
})
export class EntityModelService {

  entity: any = {
    business: {
      validated: false,
      status: 'Not Started'
    },
    relationships: {
      validated: false,
      status: 'Not Started'
    },
    tax: {
      validated: false,
      status: 'Not Started'
    },
    cage: {
      required: false,
      validated: false,
      status: 'Not Started'
    }
  };

  survey: any = {

  };

  constructor() { }
}