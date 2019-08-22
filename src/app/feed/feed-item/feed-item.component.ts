import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MessageData, MessageType } from '../service/feed.model';

@Component({
  selector: 'feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedItemComponent implements OnInit {

  @Input() model: MessageData

  constructor() { }

  ngOnInit() {
  }


  getLabel(type: MessageType): string {
    switch(type) {
      case MessageType.Alert: {
        return "Alert";
      }
      case MessageType.Notification: {
        return "Notification";
      }
      case MessageType.News: { 
        return "News";
      }
      return "None";
    }
  }

}
