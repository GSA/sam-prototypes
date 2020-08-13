import { AlertData, AlertStatus } from './alert.model';

export let Alerts: AlertData[] = [
	{
		"id" : "0000001",
		"type" : "Assign Role",
		"description" : "Entity Registration, Compliance Reporting Viewer for Tardegrade, LLC",
		"date" : "Jun 12, 2019",
		"requestedBy": "Amy Martinez",
		"status" : AlertStatus.Active
	},
	{
		"id" : "0000002",
		"type" : "Assign Role",
		"description" : "Entity Registration Data Entry for Tardegrade, LLC",
		"date" : "Jun 12, 2019",
		"requestedBy": "Amy Martinez",
		"status" : AlertStatus.Inactive
	},
	{
		"id" : "0000003",
		"type" : "Assign Role",
		"description" : "Viewer for Tardegrade, LLC",
		"date" : "Jun 12, 2019",
		"requestedBy" : "Amy Martinez",
		"status" : AlertStatus.Active
	},
	{
		"id" : "0000004",
		"type" : "Assign Role",
		"description" : "Viewer for Tardegrade, LLC",
		"date" : "Jun 12, 2019",
		"requestedBy" : "Amy Martinez",
		"status" : AlertStatus.Inactive
	}

];