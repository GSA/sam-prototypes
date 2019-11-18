import { RegistrationConfig } from './registration-config.data';
import { ContractDataConfig } from './contractdata-config.data';
import { ContractOpportunitiesConfig } from './contractopps-config.data';
import { SystemAccountsConfig } from './systemaccounts-config.data'; 

export let WorkspaceConfigurations = new Map([
	[RegistrationConfig.id, RegistrationConfig],
	[ContractDataConfig.id, ContractDataConfig],
	[ContractOpportunitiesConfig.id, ContractOpportunitiesConfig],
	[SystemAccountsConfig.id, SystemAccountsConfig]
]);