import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wages-dba-conformances',
  templateUrl: './wages-dba-conformances.component.html',
  styleUrls: ['./wages-dba-conformances.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WagesDbaConformancesComponent implements OnInit {

  public subheader = {
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };


  constructor() { }

  ngOnInit() {
  }

}
