import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SamModelService } from '../../model/sam-model.service';
import { siteMapData } from './site-map.data';

let idCounter: number = 0;

let initPage = function(page: any): any {
  	page.id = '0000' + idCounter;
  	idCounter++;
  	if(page.children && page.children.length > 0) {
  		page.collapsed = true;
  		page.children.map(initPage);
  	}
  	return page;
}

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteMapComponent implements OnInit {

  siteData: any[];

  constructor(public model: SamModelService) { 
  	this.siteData = siteMapData.map(initPage);
  }

  ngOnInit() {
  }
}
