import { Component, OnInit, Directive, ChangeDetectionStrategy } from '@angular/core';

@Directive({
  selector: '[landingTile]'
})
export class LandingTileDirective {
  constructor() { }
}

@Component({
  selector: 'landing-tile',
  templateUrl: './landing-tile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
