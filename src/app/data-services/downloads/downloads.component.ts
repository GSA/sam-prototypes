import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-data-services',
  templateUrl: './downloads.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DownloadsComponent implements OnInit {
  domain: string;

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

  }

  search(event) {

  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
