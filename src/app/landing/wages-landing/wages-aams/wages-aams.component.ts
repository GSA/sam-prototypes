import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WagesAamsService } from './wages-aams-service/wages-aams.service';

@Component({
  selector: 'app-wages-aams',
  templateUrl: './wages-aams.component.html',
  styleUrls: ['./wages-aams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WagesAamsComponent implements OnInit {

  public subheader = {
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: WagesAamsService ) { }

  ngOnInit() {
  }

}
