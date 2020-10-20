import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'app-registration-landing',
  templateUrl: './registration-landing.component.html',
  styleUrls: ['./registration-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationLandingComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an ID or keyword'
  }

  public searchHelp = [
    {
      title: 'Getting started searching entity registrations',
      articles: [
        {
          title: 'Search entity registrations',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Follow an entity registration',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Save searches',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Quick start guide for entity registrations',
          link: '/help',
          icon: 'sds fa-document-pdf'
        }
      ]
    },
    {
      title: 'Using entity registrations advanced search',
      articles: [
        {
          title: 'Filter by entity',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by entity type',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by location',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by socio-economic status',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by product or service code',
          link: '/help',
          icon: 'sds fa-document'
        }
      ]
    }
  ];

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


  constructor(private router: Router, public locationStrategy: LocationStrategy, public model: SamModelService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search/results'], { queryParams: { index: 'registrations', keyword: 'hello' } });
  }

}
