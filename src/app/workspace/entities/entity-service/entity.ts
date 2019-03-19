export enum EntityStatus {
	ACTIVE = 1,
	DRAFT,
	AWAITING_ROLE_APPROVAL,
	PROCESSING,
	EXPIRED,
	INACTIVE
}

export class Entity {

constructor(public entityName: string, public entityID: string, public dunsID: string, public cageID: string, public ncageID: string, public status: EntityStatus, public expiresDate: Date, public street1: string, public street2: string, public city: string, public state: string, public zipCode: string, public country: string) {}

}
