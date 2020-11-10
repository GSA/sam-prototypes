import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-databank-scheduled-reports',
  templateUrl: './databank-scheduled-reports.component.html',
  styleUrls: ['./databank-scheduled-reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatabankScheduledReportsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }


  back() {
      this.location.back();
  }

}
