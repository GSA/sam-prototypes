import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExclusionsComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an ID or keyword'
  }

   public searchHelp = [
    {
      title: 'Getting started searching exclusions',
      articles: [
        {
          title: 'Search exclusions',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Search for multiple exclusions',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Search by SSN/TIN',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Save searches',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Exclusions quick start guide',
          link: '/help',
          icon: 'sds fa-document-pdf'
        }
      ]
    },
    {
      title: 'Using exclusions advanced search',
      articles: [
        {
          title: 'Filter by agency',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by location',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by exclusion type',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by date',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Filter by status',
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

  constructor(private router: Router, public model: SamModelService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search'], { queryParams: { index: 'exclusions', keyword: 'hello' } });
  }

}
