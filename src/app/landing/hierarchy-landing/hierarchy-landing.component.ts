import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'app-hierarchy-landing',
  templateUrl: './hierarchy-landing.component.html',
  styleUrls: ['./hierarchy-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchyLandingComponent implements OnInit {

  constructor(private router: Router, public locationStrategy: LocationStrategy, public model: SamModelService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search/results'], { queryParams: { index: 'hierarchy', keyword: 'hello' } });
  }

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an ID or keyword'
  }

    public searchHelp = [
    {
      title: 'Getting started searching federal hierarchy',
      articles: [
        {
          title: 'Search federal hierarchy',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Save a search',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Quick start guide for federal hierarchy',
          link: '/help',
          icon: 'sds fa-document'
        }
      ]
    },
    {
      title: 'Using the agency picker',
      articles: [
        {
          title: 'Search by department or subtier code',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Search by department or subtier name',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Use the advanced agency picker',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Quick start guide for the agency picker',
          link: '/help',
          icon: 'sds fa-document-pdf'
        },
        {
          title: 'Getting started with the agency picker',
          link: '/help',
          icon: 'sds fa-video-square'
        }
      ]
    }
  ];

}
