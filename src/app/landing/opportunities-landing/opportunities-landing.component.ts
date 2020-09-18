import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SamModelService } from '../../model/sam-model.service';
import { SdsSearchComponent } from '@gsa-sam/components';

@Component({
  selector: 'app-opportunities-landing',
  templateUrl: './opportunities-landing.component.html',
  styleUrls: ['./opportunities-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunitiesLandingComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an ID or keyword'
  }

  public searchHelp = [
    {
      title: 'Getting started searching entities',
      articles: [
        {
          title: 'Search entity registrations',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Search disaster response registry',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Save my searches',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Use the interested vendors list',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Quick Start Guide for Contractors',
          link: '/help',
          icon: 'sds fa-document-pdf'
        },
        {
          title: 'Video - Use contract opportunities to do business with the government',
          link: '/help',
          icon: 'sds fa-video-square'
        }
      ]
    },
    {
      title: 'Use contract opportunities advanced search',
      articles: [
        {
          title: 'Changing search filters',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Understanding notice types',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Set-Asides for small businesses',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Using NAICS Codes',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Using PCS Codes',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Search by place of performance',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Search vendor collaboration opportunities',
          link: '/search',
          icon: 'sds fa-search'
        },
        {
          title: 'Search small business events',
          link: '/search',
          icon: 'sds fa-search'
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


  constructor(private router: Router, public model: SamModelService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search/results'], { queryParams: { index: 'opportunities', keyword: 'hello' } });
  }

}
