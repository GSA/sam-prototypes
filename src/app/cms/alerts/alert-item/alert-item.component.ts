import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AlertData, AlertStatus } from '../alert-service/alert.model';

@Component({
  selector: 'alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertItemComponent implements OnInit {

  @Input() model: AlertData

  constructor() { }

  ngOnInit() {
  }

  getLabel(type: AlertStatus): string {
    switch(type) {
      case AlertStatus.Active: {
        return "Active";
      }
      case AlertStatus.Inactive: {
        return "Inactive";
      }
      return "None";
    }
  }

}
