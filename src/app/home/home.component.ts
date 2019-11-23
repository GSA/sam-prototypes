import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { SamModelService } from '../model/sam-model.service';

import { NewsData } from '../news/news-data/news.model';
import { NewsList } from '../news/news-data/news.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_styles.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  newsList: NewsData[] = NewsList.sort(this.sortNews).slice(0, 3);

  constructor(private router: Router, public model: SamModelService) {
  }

  ngOnInit() {
  }

  sortNews(a: NewsData, b: NewsData) {
      return(a.publishDate < b.publishDate) ? 1 : -1;
  }

  navigateTo(route: string) {
  	this.router.navigateByUrl(route);
  }

  ngAfterViewInit()
  {
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
