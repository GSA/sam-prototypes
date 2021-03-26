import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Alert } from '@gsa-sam/layouts';

@Component({
  selector: 'app-alerts',
  template: `
    <sds-system-alert *ngIf="alerts && alerts.length" 
        [alerts]="alerts" (seeAllAlerts)="onSeeAllAlerts()" (detailsClicked)="onShowDetailsClicked($event)"></sds-system-alert>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAlertsComponent implements OnInit {

  alerts: Alert[] = [
    {
      header: 'Upcoming System Maintenance on May 22',
      date: new Date(),
      description: 'SAM.gov will be performing system maintenance from 1am - 3am EST on May 22.  If you experience delays in service during this time, please try again later.',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSeeAllAlerts() {
    console.log('See All Alerts Clicked');
  }

  onShowDetailsClicked(alert) {
    console.log('Show Details for alert', alert);
  }


}
