import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wages-sca-conformances',
  templateUrl: './wages-sca-conformances.component.html',
  styleUrls: ['./wages-sca-conformances.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WagesScaConformancesComponent implements OnInit {

  public subheader = {
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };
  
  constructor() { }

  ngOnInit() {
  }

}
