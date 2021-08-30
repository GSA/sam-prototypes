import { Observable } from 'rxjs';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';
import { Domain } from './domain.interface';

export enum FeedItemType {
  Notification = 1,
  Request,
  Announcement,
  Role,
  EntityHierarchyRole,
  TitleChange,
  HierarchyChange,
  CFDANumberChange,
  AssistanceListing,
  OMBApproval,
  SystemAccount,
}

export enum RequestStatus {
    Pending = 1,
    Approved,
    Rejected
}

export interface FeedItem extends INavigationLink {
    id: string,
    itemType: FeedItemType,
    date: Date,
    description: string,
    domains?: Domain[],
}

export interface RequestItem extends FeedItem {
    status: RequestStatus
    updated: Date,
    data?: any
}

export interface FeedService {
	getFeedItems(): Observable<FeedItem[]>;
}

export let itemTypeMap: Map<FeedItemType, string> = new Map<FeedItemType, string>([
    [FeedItemType.Notification, 'Notification'],
    [FeedItemType.Request, 'Request'],
    [FeedItemType.Announcement, 'Announcement'],
    [FeedItemType.Role, 'Role'],
    [FeedItemType.EntityHierarchyRole, 'Entity Hierarchy Role'],
    [FeedItemType.TitleChange, 'Title Change'],
    [FeedItemType.HierarchyChange, 'Hierarchy Change'],
    [FeedItemType.CFDANumberChange, 'CFDA Number Change'],
    [FeedItemType.AssistanceListing, 'Assistance Listing'],
    [FeedItemType.OMBApproval, 'OMB Approval'],
    [FeedItemType.SystemAccount, 'System Account']
]);

export let requestStatusMap: Map<RequestStatus, string> = new Map<RequestStatus, string>([
    [RequestStatus.Pending, 'Pending'],
    [RequestStatus.Approved, 'Approved'],
    [RequestStatus.Rejected, 'Rejected'],
]);