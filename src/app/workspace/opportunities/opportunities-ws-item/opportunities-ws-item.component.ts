import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'opportunities-ws-item',
  templateUrl: './opportunities-ws-item.component.html',
  styleUrls: ['./opportunities-ws-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunitiesWsItemComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
