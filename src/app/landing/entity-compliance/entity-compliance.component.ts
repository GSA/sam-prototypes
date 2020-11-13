import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-entity-compliance',
  templateUrl: './entity-compliance.component.html',
  styleUrls: ['./entity-compliance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityComplianceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(term) {

  }

}
