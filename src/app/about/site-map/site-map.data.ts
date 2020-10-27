
export let siteMapData: any[] = [
{
   label: 'Navigate by user',
   public: true,
   description: 'Learn what you can do as a federal or non-federal user, and as a member of the contracting or federal assistance community.',
   children: [
    {
      label: 'New to SAM',
      public: true,
      routerLink: '/newtosam',
      description: 'See all of the tasks you can perform based on who you are and what you do.'
    }
   ]
},
{
  label: 'Navigate by feature',
  public: true,
  description: 'Search, run reports, access data files and web services, or input data across any of our domains.',
  children: [
    {
  			label: 'Search',
        public: true,
  			routerLink: '/search',
  			description: 'Search across all domains or within a single domain by keyword search and using advanced search filters. Common filters are available when you search all domains. Go to the advanced search for each domain for more filtering options.',
  			children: [
  				{
  					label: 'Assistance listings advanced search',
            public: true,
  					routerLink: '/search',
  					queryParams: { index: 'assistancelist'}
  				},
  				{
  					label: 'Contract opportunities advanced search',
            public: true,
  					routerLink: '/search',
  					queryParams: { index: 'opportunities'}
  				},
  				{
  					label: 'Contract data advanced search',
            public: true,
  					routerLink: '/search',
  					queryParams: { index: 'opportunities'}
  				},
  				{
  					label: 'Entity information advanced search',
            public: true,
  					routerLink: '/search',
  					queryParams: { index: 'entityinfo'},
  					children: [
		  				{
		  					label: 'Entity registration advanced search',
                public: true,
		  					routerLink: '/search',
		  					queryParams: { index: 'opportunities'}
		  				},
		  				{
		  					label: 'Exclusions advanced search',
                public: true,
		  					routerLink: '/search',
		  					queryParams: { index: 'opportunities'}
		  				},
		  				{
		  					label: 'Integrity information advanced search',
                public: true,
		  					routerLink: '/search',
		  					queryParams: { index: 'opportunities'}
		  				},
		  				{
		  					label: 'Disaster response registry',
                public: true,
		  					routerLink: '/search',
		  					queryParams: { index: 'opportunities'}
		  				},
  					]
  				},
  				{
  					label: 'Federal hierarchy advanced search',
            public: true,
  					routerLink: '/search',
  					queryParams: { index: 'hierarchy'}
  				},
  				{
  					label: 'Wage determinations search by id',
            public: true,
  					routerLink: '/search',
  					queryParams: { index: 'hierarchy'}
  				},
  				{
  					label: 'Wage determinations DBA search',
            public: true,
  					routerLink: '/search',
  					queryParams: { index: 'hierarchy'}
  				},
  				{
  					label: 'Wage determinations SCA search',
            public: true,
  					routerLink: '/search',
  					queryParams: { index: 'hierarchy'}
  				}
  			]
  		},
  		{
  			label: 'DataBank',
  			routerLink: '/databank',
  			description: 'Run standard, administrative, and ad-hoc reports.',
        public: true,
  			children: [
  			]
  		},	
  		{
  			label: 'Data Services',
  			routerLink: '/dataservices',
  			description: 'Download data files and connect to web services.',
  			public: true,
  			children: [
  			]
  		},
  		{
  			label: 'Workspace',
  			routerLink: '/workspace',
  			description: 'Download data files and connect to web services.',
  			public: false,
  			children: [
  			]
  		}
    ]},
    {
      label: 'Navigate by domain',
      public: true,
      description: 'Learn about the data in each of our domains.',
      children: [
        {
          label: 'Assistance Listings',
          routerLink: '/home/assistance',
          description: 'Run standard, administrative, and ad-hoc reports.',
          public: true,
          children: [
          ]
        },  
        {
          label: 'Contract Opportunities',
          routerLink: '/home/opportunities',
          description: 'Download data files and connect to web services.',
          public: true,
          children: [
          ]
        },
        {
          label: 'Contract data',
          routerLink: '/home/contractdata',
          description: 'Download data files and connect to web services.',
          public: true,
          children: [
          ]
        },
        {
          label: 'Entity Registration',
          routerLink: '/home/assistance',
          description: 'Run standard, administrative, and ad-hoc reports.',
          public: true,
          children: [
          ]
        },  
        {
          label: 'Exclusions',
          routerLink: '/home/opportunities',
          description: 'Download data files and connect to web services.',
          public: true,
          children: [
          ]
        },
        {
          label: 'Disaster Response',
          routerLink: '/home/opportunities',
          description: 'Download data files and connect to web services.',
          public: true,
          children: [
          ]
        },
        {
          label: 'Federal Hierarchy',
          routerLink: '/home/contractdata',
          description: 'Download data files and connect to web services.',
          public: true,
          children: [
          ]
        },
        {
            label: 'Wage Determinations',
            routerLink: '/home/contractdata',
            description: 'Download data files and connect to web services.',
            public: true,
            children: [
            ]
        }
      ]
    }
  ]