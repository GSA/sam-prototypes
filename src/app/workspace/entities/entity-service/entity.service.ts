import { Injectable } from '@angular/core';
import { Entity, EntityStatus } from './entity';
import { EntityServiceModule } from './entity-service.module';

let entityResults: Entity[] = [
	{ 	
		"entityName": "Dill and Sweet Pickle Refrigeration, LLC",
		"entityID": "AHD910921",
		"dunsID": "192830912",
		"cageID": "ASJDS",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('October 13, 2019'), 
		"street1": "9108 Hummingbird Way",
		"street2": "", 
		"city": "Austin",
		"state": "TX",
		"zipCode": "68394-3923",
		"country": "US"
	},
	{ 	
		"entityName": "Dill and Sweet Pickle Refrigeration, LLC",
		"entityID": "AHD910921",
		"dunsID": "192830912",
		"cageID": "ASJDS",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('October 13, 2019'), 
		"street1": "9108 Hummingbird Way",
		"street2": "", 
		"city": "Austin",
		"state": "TX",
		"zipCode": "68394-3923",
		"country": "US"
	},	
	{ 	
		"entityName": "Dill and Sweet Pickle Refrigeration, LLC",
		"entityID": "AHD910921",
		"dunsID": "192830912",
		"cageID": "ASJDS",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('October 13, 2019'), 
		"street1": "9108 Hummingbird Way",
		"street2": "", 
		"city": "Austin",
		"state": "TX",
		"zipCode": "68394-3923",
		"country": "US"
	},
	{ 	
		"entityName": "Dill and Sweet Pickle Refrigeration, LLC",
		"entityID": "AHD910921",
		"dunsID": "192830912",
		"cageID": "ASJDS",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('October 13, 2019'), 
		"street1": "9108 Hummingbird Way",
		"street2": "", 
		"city": "Austin",
		"state": "TX",
		"zipCode": "68394-3923",
		"country": "US"
	},
	{ 	
		"entityName": "Dill and Sweet Pickle Refrigeration, LLC",
		"entityID": "AHD910921",
		"dunsID": "192830912",
		"cageID": "ASJDS",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('October 13, 2019'), 
		"street1": "9108 Hummingbird Way",
		"street2": "", 
		"city": "Austin",
		"state": "TX",
		"zipCode": "68394-3923",
		"country": "US"
	}
];

@Injectable({
  providedIn: EntityServiceModule
})
export class EntityService {

  public entities = entityResults;

  constructor() { }

}
