import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'app-assistance-landing',
  templateUrl: './assistance-landing.component.html',
  styleUrls: ['./assistance-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistanceLandingComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an ID or keyword'
  }

  public searchHelp = [
    {
      title: 'Getting started searching assistance listings',
      articles: [
        {
          title: 'Search assistance listings',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Follow assistance listings',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Save searches',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Assistance listings quick start guide',
          link: '/help',
          icon: 'sds fa-document-pdf'
        }
      ]
    },
    {
      title: 'Using assistance listings advanced search',
      articles: [
        {
          title: 'Filter by federal organization',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by assistance type',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by eligibility',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by place of performance',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by date',
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

  catalogVersions = [
    {
      label: '2019 Catalog',
      id: '2019-catalog'
    },
    {
      label: '2018 Catalog',
      id: '2018-catalog'
    },
    {
      label: '2017 Catalog',
      id: '2017-catalog'
    },
    {
      label: '2016 Catalog',
      id: '2016-catalog'
    },
    {
      label: '2015 Catalog',
      id: '2015-catalog'
    },
    {
      label: '2014 Catalog',
      id: '2014-catalog'
    },
    {
      label: '2013 Catalog',
      id: '2013-catalog'
    },
    {
      label: '2012 Catalog',
      id: '2012-catalog'
    },
    {
      label: '2011 Catalog',
      id: '2011-catalog'
    },
    {
      label: '2010 Catalog',
      id: '2010-catalog'
    },
    {
      label: '2009 Catalog',
      id: '2009-catalog'
    },
    {
      label: '2008 Catalog',
      id: '2008-catalog'
    }
  ];


  constructor(private router: Router, public locationStrategy: LocationStrategy, public model: SamModelService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search'], { queryParams: { index: 'assistancelist', keyword: 'hello' } });
  }

}
