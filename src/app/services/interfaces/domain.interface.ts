
export enum Domain {
	All,
  Contracting,
  ContractOpportunities,
  ContractData,
  AssistanceListings,
  EntityInformation,
  EntityRegistration,
  Exclusions,
  ResponsibilityQualification,
  FederalHierarchy,
  UserAccounts,
  SystemAccounts,
  RoleManagement,
  EntityReporting,
  WageDeterminations
}

export let domainMap: Map<Domain, string> = new Map<Domain, string>([
	[Domain.Contracting, 'Contracting'],
	[Domain.ContractOpportunities, 'Contract Opportunities'],
	[Domain.ContractData, 'Contract Data'],
	[Domain.AssistanceListings, 'Assistance Listings'],
	[Domain.EntityInformation, 'Entity Information'],
	[Domain.EntityRegistration, 'Entity Registration'],
	[Domain.Exclusions, 'Exclusions'],
	[Domain.ResponsibilityQualification, 'Responsibility / Qualification'],
	[Domain.FederalHierarchy, 'Federal Hierarchy'],
	[Domain.UserAccounts, 'User Accounts'],
	[Domain.SystemAccounts, 'System Accounts'],
	[Domain.RoleManagement, 'Role Management'],
	[Domain.EntityReporting, 'Entity Reporting'],
	[Domain.WageDeterminations, 'Wage Determinations']
]);