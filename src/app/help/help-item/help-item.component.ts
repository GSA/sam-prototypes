import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { HelpService } from '../service/help.service';

@Component({
  selector: 'help-item',
  templateUrl: './help-item.component.html',
  styleUrls: ['./help-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpItemComponent implements OnInit {

  @Input() model;

  constructor(public service: HelpService) { }

  ngOnInit() {
  }

}
