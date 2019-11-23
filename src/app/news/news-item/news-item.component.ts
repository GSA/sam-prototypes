import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NewsData } from '../news-data/news.model';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent implements OnInit {

  @Input() model: NewsData

  constructor() { }

  ngOnInit() {
  }

}
