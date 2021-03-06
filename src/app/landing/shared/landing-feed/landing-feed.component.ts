import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components';
import { KnowledgeService, KnowledgeArticle } from '../../../services/knowledge-services/knowledge.service';

@Component({
  selector: 'landing-feed',
  template: `
    <div class="sds-feed">
      <div *ngFor="let item of model" class="event margin-0">
        <navigate [item]="item">
	        <div class="content">
	          <div class="summary">
	            <div class="date">{{item.publishDate | date:item.dateFormat }}</div>
	            <a class="action">{{item.text}}</a>
	          </div>
	          <div class="meta">
	            <em>{{item.displayDescription}}</em>
	          </div>
	        </div>
	    </navigate>
      </div>
    </div>
    <div class="padding-2 text-right more-news-link">
        <a class="usa-link" [href]="url">More Announcements</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingFeedComponent implements OnInit {

  @Input() service: KnowledgeService;
  public model: KnowledgeArticle[];
  public url: string;

  constructor() { 
  }

  ngOnInit(): void {
      this.model = this.service.getData();
      this.url = this.service.getKnowledgeBaseUrl();
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
