import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';
import { FeedItem } from '../../services/interfaces/public-apis';

@Component({
  selector: 'landing-feed',
  template: `
    <div class="sds-feed">
      <div *ngFor="let item of model" class="event margin-0">
        <navigate [item]="item">
	        <div class="content">
	          <div class="summary">
	            <div class="date">{{item.date | date:item.dateFormat }}</div>
	            <a class="action" [innerHTML]="item.text"></a>
	          </div>
	          <div class="meta">
	            <em [innerHTML]="item.description"></em>
	          </div>
	        </div>
	    </navigate>
      </div>
    </div>
    <div class="padding-2 text-right more-news-link">
      <navigation-link [link]="moreLink"></navigation-link>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingFeedComponent implements OnInit {

  @Input() model: FeedItem[];
  @Input() moreLink: INavigationLink;

  constructor() { 
  }

  ngOnInit(): void {
  }

  setFormat() {
  /*
      let today:Date = new Date();
      for(let i=0; i<this.newsList.length; i++) {
          let publishDate = new Date(this.newsList[i].publishDate);
          if(publishDate.getDate() == today.getDate() && publishDate.getMonth() == today.getMonth() && publishDate.getFullYear() == today.getFullYear())
          {
            this.newsList[i].dateFormat = 'shortTime';
          } else if(publishDate.getFullYear() == today.getFullYear()) {
            this.newsList[i].dateFormat = 'MMM d';
          } else {
            this.newsList[i].dateFormat = 'mediumDate';
          }
      }
      */
  }

}
