import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wages-labor-advisors',
  templateUrl: './wages-labor-advisors.component.html',
  styleUrls: ['./wages-labor-advisors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WagesLaborAdvisorsComponent implements OnInit {

  public subheader = {
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  log(event) {

  }

}
