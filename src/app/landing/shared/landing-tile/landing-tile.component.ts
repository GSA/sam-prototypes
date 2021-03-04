import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
