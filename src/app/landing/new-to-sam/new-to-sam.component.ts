import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-to-sam',
  templateUrl: './new-to-sam.component.html',
  styleUrls: ['./new-to-sam.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewToSamComponent implements OnInit {

  public topics = [
  	{
  		"id": "tile-1",
  		"user" : [ "federal", "non", "int" ],
  		"domain": "Entity Information",
  		"title" : "Register an Entity"
  	},
  	{
  		"id": "tile-2",
  		"user" : [ "federal", "non", "int" ],
  		"domain": "Entity Information",
  		"title" : "Update / Renew Entity Registration"
  	},
  	{
  		"id": "tile-3",
  		"user" : [ "federal", "non", "int" ],
  		"domain": "Entity Information",
  		"title" : "Administer an Entity"
  	},
  	{
  		"id": "tile-4",
  		"user" : [ "federal" ],
  		"domain": "Entity Information",
  		"title" : "Manage Exclusions"
  	},
  	{
  		"id": "tile-5",
  		"user" : [ "federal", "non", "int" ],
  		"domain": "Entity Information",
  		"title" : "Find an Agency Exclusions POC"
  	},
  	{
  		"id": "tile-6",
  		"user" : [ "federal" ],
  		"domain": "Entity Information",
  		"title" : "Research Entities"
  	},
  	{
  		"id": "tile-7",
  		"user" : [ "non" ],
  		"domain": "Contract Opportunities",
  		"title" : "Find Opportunities"
  	},
  	{
  		"id": "tile-8",
  		"user" : [ "federal" ],
  		"domain": "Contract Opportunities",
  		"title" : "Manage Contract Opportunities"
  	},
  	{
  		"id": "tile-9",
  		"user" : [ "federal", "non" ],
  		"domain": "Wage Determinations",
  		"title" : "Find a Wage Determination by ID"
  	},
  	{
  		"id": "tile-10",
  		"user" : [ "federal", "non" ],
  		"domain": "Wage Determinations",
  		"title" : "Find Construction Wage Determinations"
  	},
  	{
  		"id": "tile-11",
  		"user" : [ "federal", "non" ],
  		"domain": "Wage Determinations",
  		"title" : "Find Service Wage Determinations"
  	},
  	{
  		"id": "tile-12",
  		"user" : [ "federal", "non" ],
  		"domain": "Assistance Listings",
  		"title" : "Find Assistance Listings"
  	},
  	{
  		"id": "tile-13",
  		"user" : [ "federal" ],
  		"domain": "Assistance Listings",
  		"title" : "Add or Renew Assistance Listings"
  	},
  	{
  		"id": "tile-14",
  		"user" : [ "federal" ],
  		"domain": "Assistance Listings",
  		"title" : "Administer Assistance Listings"
  	}
  ];

  public selectedTopics;

  constructor() { 
  	this.filterTiles();
  }

  ngOnInit() {
  }

  topicApplies(topic) {
  	  return true;
  }

  filterTiles() {
    let filteredTopics = this.topics.filter(element => this.topicApplies(element));
    this.selectedTopics = new Array(0);
  	let i=0;
  	var row;
  	while(i < filteredTopics.length) {
  	   if(i % 4 == 0) {
  	        row = new Array(0);
  	   		this.selectedTopics.push(row);
  	   }
  	   row.push(filteredTopics[i]);
  	   i++;
  	}
  }

}
