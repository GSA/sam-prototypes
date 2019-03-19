import { Injectable } from '@angular/core';
import { Entity, Entities } from './entities.config';
import { EntitiesServiceModule } from './entities-service.module';

@Injectable({
  providedIn: EntitiesServiceModule
})
export class EntitiesService {

  entities: Entity[] = Entities;

  constructor() { }

}
