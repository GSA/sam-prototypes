import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-integrity-landing',
  templateUrl: './integrity-landing.component.html',
  styleUrls: ['./integrity-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrityLandingComponent implements OnInit {


  searchModel = {};

  @ViewChild('searchBar', { static: true }) searchBar;

  searchSettings = {
    size: 'large'
  }

  public searchHelp = [
    {
      title: 'Getting started searching integrity records',
      articles: [
        {
          title: 'Search integrity records',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
        	title: 'Search all entity information',
        	link: '/help',
        	icon: 'sds fa-document'
        },
        {
          title: 'Save searches',
          link: '/help',
          icon: 'sds fa-document'
        },
        {
          title: 'Quick start guide for integrity records',
          link: '/help',
          icon: 'sds fa-document-pdf'
        }
      ]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  search() {
     this.router.navigate(['/search'], { queryParams: { index: 'integrity' } });
  }
}
