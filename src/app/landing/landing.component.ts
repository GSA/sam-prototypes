import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
