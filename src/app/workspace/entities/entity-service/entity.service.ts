import { Injectable } from '@angular/core';
import { Entity, EntityStatus } from './entity';
import { EntityServiceModule } from './entity-service.module';

let entityResults: Entity[] = [
	{ 	
		"entityName": "Dill and Sweet Pickle Refrigeration, LLC",
		"entityID": "AHD910922321",
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
		"entityName": "Tardegrade Floral Consultants",
		"entityID": "LPI812392093",
		"dunsID": "203928392",
		"cageID": "NS22C",
		"ncageID": "", 
		"status": EntityStatus.DRAFT, 
		"expiresDate": null, 
		"street1": "5008 Hawthorne Road",
		"street2": "Suite 500", 
		"city": "St. Paul",
		"state": "MN",
		"zipCode": "58493-6940",
		"country": "US"
	},	
	{ 	
		"entityName": "Tardegrade Global Agricultural Production, Inc",
		"entityID": "CHD029302932",
		"dunsID": "920192829",
		"cageID": "DU89L",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('June 26, 2019'), 
		"street1": "32 11th Ave",
		"street2": "Suite 1100", 
		"city": "New York",
		"state": "NY",
		"zipCode": "19201-2091",
		"country": "US"
	},
	{ 	
		"entityName": "Tardio Aceite de Oliva",
		"entityID": "JSD203928392",
		"dunsID": "834920398",
		"cageID": "S8RJ0",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('October 5, 2019'), 
		"street1": "Ctra. el Pardo 120",
		"street2": "", 
		"city": "Madrid",
		"state": "",
		"zipCode": "29040",
		"country": "Spain"
	},
	{ 	
		"entityName": "Zutano Avacado Processing",
		"entityID": "HFG102930291",
		"dunsID": "483928374",
		"cageID": "QR09T",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('May 2, 2019'), 
		"street1": "50 Floral Park Drive",
		"street2": "", 
		"city": "Boise",
		"state": "ID",
		"zipCode": "89102-7723",
		"country": "US"
	},
	{ 	
		"entityName": "Zutano Avacado Processing",
		"entityID": "HFG102930291",
		"dunsID": "483928374",
		"cageID": "FT902",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('May 2, 2019'), 
		"street1": "50 Floral Park Drive",
		"street2": "", 
		"city": "Boise",
		"state": "ID",
		"zipCode": "89102-7723",
		"country": "US"
	},
	{ 	
		"entityName": "Zutano Avacodo Processing",
		"entityID": "HFG102930291",
		"dunsID": "483928374",
		"cageID": "HY209",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('May 6, 2019'), 
		"street1": "500 Hawaii Avenue",
		"street2": "Suite 1000", 
		"city": "Chicago",
		"state": "IL",
		"zipCode": "55102-0923",
		"country": "US"
	},
	{ 	
		"entityName": "Zutano Avacodo Processing",
		"entityID": "YTR029302930",
		"dunsID": "192830912",
		"cageID": "JY203",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('May 16, 2019'), 
		"street1": "15400 Surfers Circle",
		"street2": "", 
		"city": "San Luis Obispo",
		"state": "CA",
		"zipCode": "99029-0293",
		"country": "US"
	},
	{ 	
		"entityName": "Kiwi International Imports",
		"entityID": "FRT209384903",
		"dunsID": "293840392",
		"cageID": "RW483",
		"ncageID": "", 
		"status": EntityStatus.EXPIRED, 
		"expiresDate": new Date('August 5, 2018'), 
		"street1": "17 Fourth Street",
		"street2": "", 
		"city": "Eau Claire",
		"state": "WI",
		"zipCode": "53940-3049",
		"country": "US"
	},
	{ 	
		"entityName": "Adirondack Blue Freight",
		"entityID": "KLR849574839",
		"dunsID": "405948574",
		"cageID": "CJ29Y",
		"ncageID": "", 
		"status": EntityStatus.ACTIVE, 
		"expiresDate": new Date('Jun 2, 2019'), 
		"street1": "50 Lima Road",
		"street2": "", 
		"city": "San Jose",
		"state": "CA",
		"zipCode": "95849-2938",
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
