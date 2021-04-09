import { Injectable } from '@angular/core';
import { LocationServiceModule } from './location-service.module';


export interface IAddress {
      street1: string,
	  street2: string,
	  city: string,
	  state: string,
	  zipcode: string,
	  country: string
}

@Injectable({
  providedIn: LocationServiceModule
})
export class LocationService {

  constructor() { }

}
