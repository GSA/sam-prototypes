import { INavigationLink, NavigationMode } from '@gsa-sam/components';

export enum ArticleType {
  Alert = 1,
  Announcement,
  FAQ,
  Article,
  Video,
  Term
};

export interface KnowledgeArticle extends INavigationLink {
  id: string,
  type: ArticleType,
  publishDate: Date,
  displayDescription: string,
  fullDescription?: string;
};