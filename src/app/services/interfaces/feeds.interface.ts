import { Observable } from 'rxjs';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';

export interface FeedItem extends INavigationLink {
    id: string,
    date: Date,
    description: string
}

export interface FeedService {
	getFeedItems(): Observable<FeedItem[]>;
}