import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HelpService } from '../service/help.service';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpPageComponent implements OnInit {

  public model;
  public id: string;
  public isSearchResult: boolean;

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: HelpService, public route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id) {
        this.service.getById(this.id).subscribe(result => {
        	this.model = result.item;
        });
      }
    });
    this.route.queryParams.subscribe(params => {
	    this.isSearchResult = params['isSearchResult'];
	});
  }

  goBack() {
  	this.location.back();
  }

  newSearch(searchTerm) {

  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

  previous() {

  }

  next() {

  }

}
