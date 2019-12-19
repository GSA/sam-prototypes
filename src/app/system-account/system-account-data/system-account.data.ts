import { SystemAccountData } from './system-account.model';

export let SystemAccountList: SystemAccountData[] = [
	{
      status: 'Active',
      id : '00001',
      activeDate: '2019-10-12',
      expiresDate: '2020-10-12',
	    info: {
		    accountName: 'MyCMS System One',
		    systemDescription: 'This is the contract writing system used by most of the agency.',
		    systemNameAndVersion: 'CMS Pro Version 4.3'
	    },
    	organization: {
    	    organizationName: 'National Institute of Health',
    		administrators: [ 'Jonathan Morgan', 'Alexandra Anthony' ],
    		managers: [ 'Stephanie Worthington', 'Harrison Myers' ] 
    	},
   		permissions: {
   			domains: [
   				{
   					domainName: 'Contract Opportunities',
   					permissions: [
   						{
   						    id: 'read',
    						label: 'Read',
    						hasAccess: true
   						}
   					]
   				},
   				{
 					domainName: 'Contract Data',
   					permissions: [
   						{
   						    id: 'read',
    						label: 'Read',
    						hasAccess: true
   						}
   					]
   				},
   				{
 					domainName: 'Entity Information',
   					permissions: [
   						{
   						    id: 'read',
    						label: 'Read',
    						hasAccess: true
   						}
   					]
   				}
   			],
   			overallFIPSLevel : 'Medium'
   		},
    	security: {
    	    ipAddress: '127.0.0.0',
    	    connectionType: 'Web Services',
		    physicalLocation: 'This service is located at NIH Headquarters Building in Bethesda, MD',
		    officialName: 'Karen P. Jones',
		    officialEmail: 'karen.jones@hhs.gov'
    	},
    	auth: {
        officialName: 'Susan Alexander',
        authDate : '2019-10-12'
    	}
	},
	{
		status: 'Draft',
		id : '00002',
		activeDate: '2019-10-12',
		expiresDate: '2020-10-12',
		  info: {
			  accountName: 'MyCMS System Two',
			  systemDescription: 'This is the contract writing system used by most of the agency.',
			  systemNameAndVersion: 'CMS Pro Version 4.3'
		  },
		  organization: {
			  organizationName: 'National Institute of Health',
			  administrators: [ 'Jonathan Morgan', 'Alexandra Anthony' ],
			  managers: [ 'Stephanie Worthington', 'Harrison Myers' ] 
		  },
			 permissions: {
				 domains: [
					 {
						 domainName: 'Contract Opportunities',
						 permissions: [
							 {
								 id: 'read',
							  label: 'Read',
							  hasAccess: true
							 }
						 ]
					 },
					 {
					   domainName: 'Contract Data',
						 permissions: [
							 {
								 id: 'read',
							  label: 'Read',
							  hasAccess: true
							 }
						 ]
					 },
					 {
					   domainName: 'Entity Information',
						 permissions: [
							 {
								 id: 'read',
							  label: 'Read',
							  hasAccess: true
							 }
						 ]
					 }
				 ],
				 overallFIPSLevel : 'Medium'
			 },
		  security: {
			  ipAddress: '127.0.0.0',
			  connectionType: 'Web Services',
			  physicalLocation: 'This service is located at NIH Headquarters Building in Bethesda, MD',
			  officialName: 'Karen P. Jones',
			  officialEmail: 'karen.jones@hhs.gov'
		  },
		  auth: {
		  officialName: 'Susan Alexander',
		  authDate : '2019-10-12'
		  }
	  },
	  {
		status: 'Pending',
		id : '00002',
		activeDate: '2019-10-12',
		expiresDate: '2020-10-12',
		  info: {
			  accountName: 'MyCMS System Three',
			  systemDescription: 'This is the contract writing system used by most of the agency.',
			  systemNameAndVersion: 'CMS Pro Version 4.3'
		  },
		  organization: {
			  organizationName: 'National Institute of Health',
			  administrators: [ 'Jonathan Morgan', 'Alexandra Anthony' ],
			  managers: [ 'Stephanie Worthington', 'Harrison Myers' ] 
		  },
			 permissions: {
				 domains: [
					 {
						 domainName: 'Contract Opportunities',
						 permissions: [
							 {
								 id: 'read',
							  label: 'Read',
							  hasAccess: true
							 }
						 ]
					 },
					 {
					   domainName: 'Contract Data',
						 permissions: [
							 {
								 id: 'read',
							  label: 'Read',
							  hasAccess: true
							 }
						 ]
					 },
					 {
					   domainName: 'Entity Information',
						 permissions: [
							 {
								 id: 'read',
							  label: 'Read',
							  hasAccess: true
							 }
						 ]
					 }
				 ],
				 overallFIPSLevel : 'Medium'
			 },
		  security: {
			  ipAddress: '127.0.0.0',
			  connectionType: 'Web Services',
			  physicalLocation: 'This service is located at NIH Headquarters Building in Bethesda, MD',
			  officialName: 'Karen P. Jones',
			  officialEmail: 'karen.jones@hhs.gov'
		  },
		  auth: {
		  officialName: 'Susan Alexander',
		  authDate : '2019-10-12'
		  }
	  }
];