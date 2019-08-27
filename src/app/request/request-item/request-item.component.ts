import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RequestData, RequestStatus } from '../service/request.model';

@Component({
  selector: 'request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestItemComponent implements OnInit {

  @Input() model: RequestData

  constructor() { }

  ngOnInit() {
  }


  getLabel(type: RequestStatus): string {
    switch(type) {
      case RequestStatus.Pending: {
        return "Pending";
      }
      case RequestStatus.Approved: {
        return "Approved";
      }
      case RequestStatus.Rejected: { 
        return "Rejected";
      }
      case RequestStatus.Draft: {
      	return "Draft";
      }
      return "None";
    }
  }

}
