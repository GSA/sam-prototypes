
export let user:any = {
    details: {
		id: 'af1a1e60-c03d-4a8e-bbd0-50f0c5afd511',
		firstName: 'Alexandria',
		lastName: 'Witherspoon',
		email: 'alexandria.witherspoon@usda.gov',
		businessPhone: '202 555-1212',
		department: 'Department of Agriculture',
		subtier: 'Farm Service Agency'
	},
	security: {
		ial2: true
	},
	following: [

	],
	roles: [
		{
			organization: 'Farm Service Agency',
			role: 'Administrator',
			domains: [
				'Contracting',
				'Federal Assistance'
			],
			status: 'Active'
		}
	],
	dataServiceAgreements: [
		{
		    id: 'af1a1e60-c03d-4a8e-bbd0-50f0c5afd511',
			document: 'Entity Registration Terms of Use',
			domain: 'Entity Registration',
			dateSigned: 'Mar 3, 2021'
		}
	],
	'downloads': [
	],
	'emailSettings': [
		{
			'title': 'Public Notifications',
			'key': 'public-notification',
			'children': [
				{
					'title': 'Saved Search',
					'key': 'saved-search',
					'frequency': 'daily',
				},
				{
					'title': 'Large Downloads',
					'key': 'large-downloads',
					'frequency': 'immediate',
				},
				{
					'title': 'Following',
					'key': 'following',
					'frequency': 'immediate',
					'children' : [
						{
							'title': 'Assistance Listings',
							'key': 'al-following',
							'frequency': 'immediate',
						},
						{
							'title': 'Contract Opportunities',
							'key': 'co-following',
							'frequency': 'immediate',
						},
						{
							'title': 'Entity Registrations',
							'key': 'ent-following',
							'frequency': 'immediate',
						},
						{
							'title': 'Wage Determinations',
							'key': 'wd-following',
							'frequency': 'immediate',
						}
					]
				}
			]
		},
		{
			'title': 'Administrative Notifications',
			'key': 'administrative',
			'children': [
				{
					'title': 'Role Request',
					'key': 'roles-request',
					'frequency': 'daily'
				}
			]
		}
	],
	'history': [
	]
};