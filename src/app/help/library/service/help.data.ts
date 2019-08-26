import { HelpData, HelpType, VideoData, FAQData, FeatureData, TermData } from './help.model';

export let Videos: VideoData[] = [
	{
		"id" : "0000001",
		"type" : HelpType.Video,
		"title" : "Getting Started With Contract Opportunities",
		"shortDescription" : "If you are new to federal contracting and looking for opportunities to business with the federal government, we tell you how to search for opportunities and identify agencies that might be a good fit for your goods or services.",
		"fullDescription": "",
		"modifiedDate" : "Jan 12, 2019"
	},
	{
		"id" : "0000002",
		"type" : HelpType.Video,
		"title" : "Signing Up As A Federal User",
		"shortDescription" : "If you work for a federal agency and need to use SAM.gov, we walk you step-by-step through the process of signing up for a user account.",
		"fullDescription": "",
		"modifiedDate" : "Jul 26, 2019"
	},
	{
		"id" : "0000003",
		"type" : HelpType.Video,
		"title" : "Signing Up As A Public User",
		"shortDescription" : "If you would like to save searches, sign up for notifications, or run reports as an individual not officially on behalf of an entity or federal agency, we walk you through the process of signing up as a public user.",
		"fullDescription": "",
		"modifiedDate" : "Apr 14, 2019"
	},
	{
		"id" : "0000004",
		"type" : HelpType.Video,
		"title" : "Selecting NAICS codes for your entity registration",
		"shortDescription" : "When you register your entity, you must select a primary and alternate NAICS codes to identify your industries. We walk you through the NAICS directory and provide guidelines for helping you choose a primary and other codes.",
		"fullDescription": "",
		"modifiedDate" : "Jun 06, 2019"
	}
];

export let FAQs: FAQData[] = [
	{
		"id" : "0000201",
		"type" : HelpType.FAQ,
		"title" : "What contracting roles may I request as a federal user?",
		"shortDescription" : "As a federal contracting officer, you may request a Contracting Officer or Contracting.",
		"fullDescription": "",
		"modifiedDate" : "Mar 03, 2019"		
	},
	{
		"id" : "0000202",
		"type" : HelpType.FAQ,
		"title" : "How many roles may I have for my organization?",
		"shortDescription" : "You may have one role for each domain for your organization.  Domains include entity registration, contract opportunities, assistance listings and others.",
		"fullDescription": "",
		"modifiedDate" : "Mar 11, 2019"		
	}
];

export let Terms: TermData[] = [
	{
		"id" : "0000301",
		"type" : HelpType.Term,
		"title" : "Award",
		"shortDescription" : "Financial assistance that provides support or stimulation to accomplish a public purpose. Awards include grants and other agreements in the form of money or property in lieu of money, by the federal government to an eligible recipient. The term does not include: technical assistance, which provides services instead of money; other assistance in the form of loans, loan guarantees, interest subsidies, or insurance; direct payments of any kind to individuals; and contracts which are required to be entered into and administered under federal procurement laws and regulations.",
		"fullDescription": "",
		"modifiedDate" : "Aor 01, 2019"		
	},
	{
		"id" : "0000302",
		"type" : HelpType.Term,
		"title" : "Formula Grant",
		"shortDescription" : "Allocations of federal funding to states, territories, or local units of government determined by distribution formulas in the authorizing legislation and regulations. To receive a formula grant, the entity must meet all the eligibility criteria for the program, which are pre-determined and not open to discretionary funding decisions. Formula grants typically fund activities of a continuing nature and may not be confined to a specific project. Common elements in formulas include population, proportion of population below the poverty line, and other demographic information.",
		"fullDescription": "",
		"modifiedDate" : "Apr 01, 2019"		
	}
];

export let Features: FeatureData[] = [];