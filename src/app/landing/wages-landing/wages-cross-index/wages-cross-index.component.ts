import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wages-cross-index',
  templateUrl: './wages-cross-index.component.html',
  styleUrls: ['./wages-cross-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WagesCrossIndexComponent implements OnInit {

  public subheader = {
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };
  
  constructor() { }

  ngOnInit() {
  }

}
