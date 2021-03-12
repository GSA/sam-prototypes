import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'splash-tile',
  templateUrl: './splash-tile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
