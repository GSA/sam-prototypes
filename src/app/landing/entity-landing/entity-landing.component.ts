import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-entity-landing',
  templateUrl: './entity-landing.component.html',
  styleUrls: ['./entity-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
