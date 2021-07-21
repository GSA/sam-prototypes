import { Component, OnInit } from '@angular/core';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';
import { AnnouncementsService } from '../services/feed-services/announcements.service';
import { FeedItem } from '../services/interfaces/public-apis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_styles.scss']
})
export class HomeComponent implements OnInit {

  announcements: FeedItem[];

  moreAnnouncementsLink: INavigationLink = {
    text: "More Announcements",
    route: "https://fsd.gov/",
    mode: NavigationMode.EXTERNAL
  }

  constructor(public announcementsService: AnnouncementsService) {

  }

  ngOnInit() {
    this.announcementsService.getFeedItems().subscribe((announcements: FeedItem[]) => {
      this.announcements = announcements;
    });
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
