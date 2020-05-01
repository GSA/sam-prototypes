import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-status-tracker',
  templateUrl: './status-tracker.component.html',
  styleUrls: ['./status-tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
