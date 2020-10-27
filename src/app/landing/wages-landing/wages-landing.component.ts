import { Component, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SdsSearchModule } from '@gsa-sam/components';

@Component({
  selector: 'app-wages-landing',
  templateUrl: './wages-landing.component.html',
  styleUrls: ['./wages-landing.component.scss']
})
export class WagesLandingComponent implements OnInit, OnChanges {

  public model: {};

  public searchSettings = {
    size: 'large'
  }

  videoConfiguration = {
    'sourceWebm': '',
    'sourceMp4': 'https://github.com/GSA/sam-static-content/raw/master/assets/video/gsa-sample.mp4',
    'height': 'auto',
    'width': '100%',
    'caption':'assets/video/gsa-sample.vtt',
    'poster':'https://github.com/GSA/sam-static-content/raw/master/assets/images/gsa-sample.jpg',
    'id': 'smapleId1',
    'seekInterval': 20,
    'debug': true,
    'preload': 'none'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
      console.log('Searching...');
      this.router.navigate(['/search'], { queryParams: { index: 'wages' } });
  }

  ngOnChanges() {
      console.log('Searching...');
      this.router.navigate(['/search'], { queryParams: { index: 'wages' } });
  }

}
