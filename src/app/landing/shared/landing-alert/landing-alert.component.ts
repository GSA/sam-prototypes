import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'landing-alert',
  templateUrl: './landing-alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
