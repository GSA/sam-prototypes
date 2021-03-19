import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-logo',
  templateUrl: "./home-logo.component.html",
  styleUrls: [ "./home-logo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLogoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}
