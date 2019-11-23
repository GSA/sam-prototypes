import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AlertData } from './alert-data/alert.model';
import { AlertDataService } from './alert-data/alert-data.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent implements OnInit {

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: AlertDataService) { }

  ngOnInit() {
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}
