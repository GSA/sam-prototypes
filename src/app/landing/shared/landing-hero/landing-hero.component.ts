import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'landing-hero',
  templateUrl: './landing-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
