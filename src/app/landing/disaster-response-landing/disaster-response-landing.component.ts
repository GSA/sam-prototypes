import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-disaster-response-landing',
  templateUrl: './disaster-response-landing.component.html',
  styleUrls: ['./disaster-response-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisasterResponseLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
