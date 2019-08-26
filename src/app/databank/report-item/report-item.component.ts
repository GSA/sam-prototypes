import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
