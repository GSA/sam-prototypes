import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import { NewsData } from '../news/news-data/news.model';
import { NewsList } from '../news/news-data/news.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_styles.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  @ViewChild('selectOptions', { static: true }) selectOptions;

  newsList: NewsData[] = NewsList.sort(this.sortNews).slice(0, 3);


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit()
  {
  }

  sortNews(a: NewsData, b: NewsData) {
      return(a.publishDate < b.publishDate) ? 1 : -1;
  }

  onSubmit() {
     this.router.navigate(['/search/results'], { queryParams: { index: this.selectOptions.selected } });
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
