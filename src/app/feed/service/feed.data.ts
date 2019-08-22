import { MessageData, MessageType, MessageStatus } from './feed.model';

export let Messages: MessageData[] = [
	{
		"id" : "0000001",
		"type" : MessageType.Alert,
		"title" : "Upcoming Scheduled Maintenance",
		"description" : "SAM.gov will be down for scheduled maintenance Saturday, 09/14/2019, from 8:00 AM to 1:00 PM (EDT).",
		"date" : "Jun 12, 2019",
		"status" : MessageStatus.Information
	},
	{
		"id" : "0000002",
		"type" : MessageType.News,
		"title" : "AAM 230 Published",
		"description" : "The Department of Labor has published All Agency Memorandum 230: 2019 Service Contract Act Health and Welfare Fringe Benefit",
		"date" : "Jun 06, 2019",
		"status" : MessageStatus.None
	},
	{
		"id" : "0000003",
		"type" : MessageType.Notification,
		"title" : "Wage Determination Notification",
		"description" : "A new revision of WD CA20180029 is available as of 2018-05-04 00:05.",
		"date" : "Jun 10, 2019",
		"status" : MessageStatus.None
	},
	{
		"id" : "0000004",
		"type" : MessageType.Notification,
		"title" : "Controlled Attachment Access Requested",
		"description" : "Your request to access a controlled attachment for solicitation ILM-1029-12 has been submitted.",
		"date" : "Jun 08, 2019",
		"status" : MessageStatus.None
	}

];