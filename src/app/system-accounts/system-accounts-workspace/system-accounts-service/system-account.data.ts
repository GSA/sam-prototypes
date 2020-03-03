import { SystemAccountData } from './system-account.model';


export let systemAccounts = [
  {
    "id" : "00001",
    "accountName" : "NIH CWS System",
    "systemDescription" : "This contract writing system is used for all NIH contracts.",
    "expiresDate" : "2020-10-12",
    "status" : "Active",
    "domains" : ["Contract Opportunities", "Contract Data", "Entity Information"],
    "organization" : {
      "code" : "075",
      "organizationName" : "National Institute of Health",
      "organizationLevel" : "2"
     }
  },
  {
    "id" : "00002",
    "accountName" : "NIH Grants Database",
    "systemDescription" : "The NIH Grants Databases manages all research grants across all institutues.  It also uses the public Assistance Listings Data.",
    "expiresDate" : "2020-09-16",
    "status" : "Active",
    "domains" : ["Entity Information"],
    "organization" : {
      "code" : "075",
      "organizationName" : "National Institute of Health",
      "organizationLevel" : "2"
     }
  }, 
  {
    "id" : "00003",
    "accountName" : "HHS Contract Writing System",
    "systemDescription" : "All of HHS, except NIH, uses this contract writing system.",
    "expiresDate" : "2020-03-30",
    "status" : "Active",
    "domains" : ["Contract Opportunities", "Contract Data", "Entity Information"],
    "organization" : {
      "code" : "075",
      "organizationName" : "Department of Health and Human Services",
      "organizationLevel" : "1"
     }
  },  
  {
    "id" : "00004",
    "accountName" : "HHS Grant Writing System",
    "systemDescription" : "This system is used to write grants for all of HHS.",
    "expiresDate" : "2020-08-16",
    "status" : "Active",
    "domains" : ["Entity Information"],
    "organization" : {
      "code" : "075",
      "organizationName" : "Department of Health and Human Services",
      "organizationLevel" : "1"
     }
  }
];

export let SystemAccountList: SystemAccountData[] = [
    {
        "status": "Active",
        "id" : "00001",
        "activeDate": "2019-10-12",
        "expiresDate": "2020-10-12",
        "versions" : [
    	     {
            "version" : "Draft",
      	    "info" : {
      		    "accountName" : "MyCMS System One",
      		    "systemDescription": "This is the contract writing system used by most of the agency.",
      		    "systemNameAndVersion": "CMS Pro Version 4.3"
      	    },
          	"organization": {
          	  "organizationName": "National Institute of Health",
          		"administrators": [ "Jonathan Morgan", "Alexandra Anthony" ],
          		"managers": [ "Stephanie Worthington", "Harrison Myers" ] 
          	},
         		"permissions": {
         			"domains": [
         				{
         					"domainName": "Contract Opportunities",
         					"permissions": [
         						{
         						    "id": "read",
          						"label": "Read",
          						"hasAccess": true
         						}
         					]
         				},
         				{
       					"domainName": "Contract Data",
         					"permissions": [
         						{
         						    "id": "read",
          						"label": "Read",
          						"hasAccess": true
         						}
         					]
         				},
         				{
       					"domainName": "Entity Information",
         					"permissions": [
         						{
         						    "id": "read",
          						"label": "Read",
          						"hasAccess": true
         						}
         					]
         				}
         			],
         			"overallFIPSLevel" : "Medium"
         		},
          	"security": {
          	    "ipAddress": "127.0.0.0",
          	    "connectionType": "Web Services",
      		    "physicalLocation": "This service is located at NIH Headquarters Building in Bethesda, MD",
      		    "officialName": "Karen P. Jones",
      		    "officialEmail": "karen.jones@hhs.gov"
          	},
          	"auth": {
              "officialName": "Susan Alexander",
              "authDate" : "2019-10-12"
          	}
      	},
        {
            "version" : "Active",
            "info": {
              "accountName": "MyCMS System One",
              "systemDescription": "This is the contract writing system used by most of the agency.",
              "systemNameAndVersion": "CMS Pro Version 4.3"
            },
            "organization": {
                "organizationName": "National Institute of Health",
              "administrators": [ "Jonathan Morgan", "Alexandra Anthony" ],
              "managers": [ "Stephanie Worthington", "Harrison Myers" ] 
            },
            "permissions": {
              "domains": [
                {
                  "domainName": "Contract Opportunities",
                  "permissions": [
                    {
                        "id": "read",
                      "label": "Read",
                      "hasAccess": true
                    }
                  ]
                },
                {
                "domainName": "Contract Data",
                  "permissions": [
                    {
                        "id": "read",
                      "label": "Read",
                      "hasAccess": true
                    }
                  ]
                },
                {
                "domainName": "Entity Information",
                  "permissions": [
                    {
                        "id": "read",
                      "label": "Read",
                      "hasAccess": true
                    }
                  ]
                }
              ],
              "overallFIPSLevel" : "Medium"
            },
            "security": {
                "ipAddress": "127.0.0.0",
                "connectionType": "Web Services",
              "physicalLocation": "This service is located at NIH Headquarters Building in Bethesda, MD",
              "officialName": "Karen P. Jones",
              "officialEmail": "karen.jones@hhs.gov"
            },
            "auth": {
              "officialName": "Susan Alexander",
              "authDate" : "2019-10-12"
            }
          }
      ]
  }
];