import { Injectable } from '@angular/core';
import { NavigationMode } from '@gsa-sam/components';
import { KnowledgeServicesModule } from './knowledge-services.module';
import { ArticleType, KnowledgeArticle, KnowledgeService } from './knowledge.service';

@Injectable({
  providedIn: KnowledgeServicesModule
})
export class AnnouncementsService extends KnowledgeService {

    url: string = 'https://fsd.gov';

    articles: KnowledgeArticle[] = [
    	{
    		  text: "SAM.gov registration is always FREE",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
			  id: "ANN0001",
			  type: ArticleType.Announcement,
			  publishDate: new Date(2021, 3, 8),
			  displayDescription: 'There is NO FEE to register, or maintain your registration, in the System for Award Management (SAM.gov). If you receive an email from a company claiming to represent SAM.gov, be cautious.'
    	},
    	{
    	      text: "Changes to FSD.gov",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
			  id: "ANN0002",
			  type: ArticleType.Announcement,
			  publishDate: new Date(2020, 12, 20),
			  displayDescription: 'Effective December 8, 2020 there are changes to the layout of the Federal Service Desk. With the new look and feel, the functions you\'re accustomed to remain easily accessible.'
    	},
    	{
    	      text: "FPDS Reports Transition",
    		  route: 'https://www.fsd.gov/gsafsd_sp?id=gsafsd_kb_articles&sys_id=e6eae1e41b0568d0d3ab404fe54bcb4d',
    		  mode: NavigationMode.EXTERNAL,
			  id: "ANN0003",
			  type: ArticleType.Announcement,
			  publishDate: new Date(2020, 10, 16),
			  displayDescription: 'The FPDS reports transition to beta.SAM.gov is complete and beta.SAM.gov is the only place to go to create and run contract data reports.  To search contract data, continue to use FPDS.gov.'
    	}

    ];

  constructor() { 
      super();
  }

  getData(): KnowledgeArticle[] {
      return this.articles;
  }


  getKnowledgeBaseUrl(): string {
  	return this.url;
  }

}
