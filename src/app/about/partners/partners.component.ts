import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersComponent implements OnInit {

  constructor(public locationStrategy: LocationStrategy) { }

  ngOnInit() {
  }

}
