import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'landing-card',
  templateUrl: './landing-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingCardComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
