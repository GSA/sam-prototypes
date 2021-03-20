import { Component, OnInit } from '@angular/core';

import { AnnouncementsService } from '../services/knowledge-services/announcements.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_styles.scss']
})
export class HomeComponent implements OnInit {
  constructor(public announcementsService: AnnouncementsService) {
  }

  ngOnInit() {
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
