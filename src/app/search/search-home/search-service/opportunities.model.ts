
export interface OpportunityType {
	code: string,
	value: string
}

export interface OpportunityDescription {
	lastModifiedDate: string,
	content: string
}

export interface OpportunityAwardee {
	name: string,
	duns: string
}

export interface OpportunityAward {
	awardee: OpportunityAwardee
}

export interface OpportunityAddress {
	zip: string,
	country: string,
	city: string,
	streetAddress: string,
	streetAddress2: string,
	state: string
}

export interface OpportunityOrganization {
	organizationId: string,
	address: OpportunityAddress,
	level: number,
	name: string,
	type: string,
	status: string
}

export interface OpportunityModifications {
	count: number
}

export interface Opportunity {
	isCanceled: boolean,
	_rScore: number,
	_type: string,
	publishDate: string,
	isActive: boolean,
	title: string,
	type: OpportunityType,
	descriptions: OpportunityDescription[],
	solicitationNumber: string,
	responseDate: string,
	parentNoticeId: string,
    award: OpportunityAward,
    modifiedDate: string,
    organizationHierarchy: OpportunityOrganization[],
    id: string,
    modifications: OpportunityModifications
}


export interface ResponseHRef {
	href: string
}

export interface ResponseLinks {
	self: ResponseHRef
}

export interface ResponseEmbedded {
	results: Opportunity[]
}

export interface ResponsePage {
		size: number,
		totalElements: number,
		totalPages: number
		number: number,
		maxAllowedRecords: number	
}

export interface OpportunitiesResponse {
	_embedded: ResponseEmbedded,
	_links: ResponseLinks,
	page: ResponsePage
}