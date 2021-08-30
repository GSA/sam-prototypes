import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app-service/app.service';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-opportunities-landing-federal',
  templateUrl: './opportunities-landing-federal.component.html',
  styleUrls: ['./opportunities-landing-federal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunitiesLandingFederalComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an ID or keyword'
  }

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

  constructor(private router: Router, public service: AppService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search'], { queryParams: { index: 'opportunities', keyword: 'hello' } });
  }

}
