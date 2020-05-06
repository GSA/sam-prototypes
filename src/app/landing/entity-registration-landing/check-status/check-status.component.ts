import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
