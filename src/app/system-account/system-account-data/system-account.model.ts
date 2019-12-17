
export interface SystemInfo {
    accountName: string;
    systemDescription: string;
    systemNameAndVersion: string;
}

export interface SystemOrganization {
    organizationName: string;
    administrators: string[];
    managers: string[];
}

export interface SystemPermission {
    id: string;
    label: string;
    hasAccess: boolean;
}

export interface SystemSecurityDomain {
    domainName: string;
    permissions: SystemPermission[];
}

export interface SystemPermissions {
    domains: SystemSecurityDomain[];
    overallFIPSLevel: string;
}

export interface SystemSecurity {
    ipAddress: string;
    connectionType: string;
    physicalLocation: string;
    officialName: string;
    officialEmail: string;
}

export interface SystemAuth {
    officialName: string;
    authDate: string;
}

export interface SystemVersion {
    version: string;
    info: SystemInfo;
    organization: SystemOrganization;
    permissions: SystemPermissions;
    security: SystemSecurity;
    auth: SystemAuth;
}

export interface SystemAccountData {
    status: string;
    id: string;
    activeDate: string;
    expiresDate: string;
    versions: SystemVersion[];
}