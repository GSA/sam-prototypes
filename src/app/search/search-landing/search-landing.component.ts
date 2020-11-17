import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-landing',
  templateUrl: './search-landing.component.html',
  styleUrls: ['./search-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchLandingComponent implements OnInit {

  public searchModel:any = {};

  searchSettings = {
    placeholder: 'Enter an ID or keyword',
    size: 'large',
    dropdown: {
      placeholder: 'Select domain...',
      options: [
        { value: 'assistancelist', label: 'Assistance Listings' },
        { value: 'opportunities', label: 'Contract Opportunities' },
        { value: 'entityinfo', label: 'Entity Information' },
        { value: 'hierarchy', label: 'Federal Hierarchy' },
        { value: 'wdbyid', label: 'Wage Determinations' }
      ]
    }
  };

   videoConfiguration = {
    'sourceWebm': '',
    'sourceMp4': 'https://iae-prd-videos.s3.amazonaws.com/fbo/VID007_Bidders.mp4',
    'height': '200',
    'width': '350',
    'caption':'./assets/video/Contractors.vtt',
    'poster':'./assets/img/video-search-opps.png',
    'id': 'smapleId1',
    'seekInterval': 20,
    'debug': true,
    'preload': 'none'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
     let domain = (!this.searchModel.searchCategory || 'Select domain...' == this.searchModel.searchCategory) ? 'all' : this.searchModel.searchCategory;

     this.router.navigate(['/search'], { queryParams: { index: domain } });
  }

}
