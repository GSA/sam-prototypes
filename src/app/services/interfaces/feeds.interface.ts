import { Observable } from 'rxjs';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';
import { Domain } from './domain.interface';

export interface FeedItem extends INavigationLink {
    id: string,
    date: Date,
    description: string,
    domains?: Domain[]
}

export interface FeedService {
	getFeedItems(): Observable<FeedItem[]>;
}