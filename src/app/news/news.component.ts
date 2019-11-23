import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { NewsData } from './news-data/news.model';
import { NewsDataService } from './news-data/news-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: NewsDataService) {  
  }

  ngOnInit() {}

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}
