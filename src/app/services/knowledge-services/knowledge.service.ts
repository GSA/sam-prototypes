import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';
import { KnowledgeArticle } from '../interfaces/public-apis';

export abstract class KnowledgeService {

    public AlertParameters: SearchParameters = {
    	page: {
    		pageNumber: 1,
    		pageSize: -1,
    		totalPages: -1
    	},
    	sortField: 'viewCount',
    	filter: {
    		isActive: true
    	}
    };
	
	constructor() {}

	abstract getData(): KnowledgeArticle[];

	abstract getKnowledgeBaseUrl(): string;

	getArticles(parameters: SearchParameters): Observable<SearchResult> {
	   let data = this.getData();
	   if(data) {
	       return of({
	       		items: data,
	       		totalItems: data.length
	       });
	   } else {
	   	   return of({
	   	   		items: [],
	   	   		totalItems: 0
	   	   });
	   }
	 }
}