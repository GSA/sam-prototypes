import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { AppService } from '../../services/app-service/app.service';
import {allIcons} from 'ngx-bootstrap-icons';

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
      title: 'Getting started searching contract opportunities',
      articles: [
        {
          title: 'Search contract opportunities',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Follow contract opportunities',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Save searches and receive updates',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Use the interested vendors list',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Contract opportunities quick start guide for contractors',
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
      title: 'Using contract opportunities advanced search',
      articles: [
        {
          title: 'Change search filters',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by notice types',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by small business set-asides',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by product and services (NAICS and PSC)',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by place of performance',
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


  constructor(private router: Router, public locationStrategy: LocationStrategy, public service: AppService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search'], { queryParams: { index: 'opportunities', keyword: 'hello' } });
  }

}
