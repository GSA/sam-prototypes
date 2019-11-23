import { AlertData } from './alert.model';

export let AlertList: AlertData[] = [
	{
		"id" : "0000001",
		"title" : "SAM.gov has transitioned",
		"description" : "beta.SAM.gov is now a part of SAM.gov and includes entity registration, exclusions, bio-preferred reporting and service contract reporting.",
		"status": "Active",
		"publishDate" : "2019-11-09",
		"expiresDate" : "2019-11-15"
	},
	{
		"id" : "0000002",
		"title" : "Maintenance Window Saturday, Dec 2",
		"description" : "SAM.gov will be unavailable from 10pm Dec 2nd until 2am Dec 3rd.",
		"status": "Active",
		"publishDate" : "2019-11-02",
		"expiresDate" : "2019-12-15"
	},
	{
		"id" : "0000003",
		"title" : "CAGE process delayed",
		"description" : "The current processing time for CAGE codes is 5 days.",
		"status": "Inactive",
		"publishDate" : "2019-11-04",
		"expiresDate" : "2020-11-15"
	}
];