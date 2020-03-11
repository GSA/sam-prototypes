import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { HelpService } from '../service/help.service';

@Component({
  selector: 'app-help-search',
  templateUrl: './help-search.component.html',
  styleUrls: ['./help-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpSearchComponent implements OnInit {

  constructor(public service: HelpService) { }

  ngOnInit() {
  }

}
