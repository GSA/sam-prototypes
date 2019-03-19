
export enum EntityStatus {
    Draft,
    InProgress,
    Submitted,
    Active,
    Expired,
    Deleted,
    Inactive
};

export enum EntityPurpose {
	AllAwards,
	Assistance
}

export class Entity {
	constructor(public entityID: string, public cageCode: string, public entityName: string, 
	            public status: EntityStatus, public expirationDate: string, public purpose: EntityPurpose) {
	}
}

export const Entities: Entity[] = [
	{
		entityID: '012345678',
		cageCode: 'ABC01',
		entityName: 'Creative Energy Associates',
		status: EntityStatus.Draft,
		expirationDate: '01/31/2019',
		purpose: EntityPurpose.AllAwards
	},
	{
		entityID: '012345679',
		cageCode: 'ABC01',
		entityName: 'Creative Energy Federal',
		status: EntityStatus.Active,
		expirationDate: '08/22/2019',
		purpose: EntityPurpose.AllAwards
	}
];