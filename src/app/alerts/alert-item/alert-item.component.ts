import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AlertData } from '../alert-data/alert.model';

@Component({
  selector: 'alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertItemComponent implements OnInit {

  @Input() model: AlertData

  constructor() { }

  ngOnInit() {
  }

}
