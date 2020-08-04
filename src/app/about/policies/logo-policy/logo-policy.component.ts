import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-logo-policy',
  templateUrl: './logo-policy.component.html',
  styleUrls: ['./logo-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoPolicyComponent implements OnInit {

  constructor(public locationStrategy: LocationStrategy) { }

  ngOnInit() {
  }

}
