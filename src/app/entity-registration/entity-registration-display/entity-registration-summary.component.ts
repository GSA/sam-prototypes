import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'entity-registration-summary',
  templateUrl: './entity-registration-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityRegistrationSummaryComponent implements OnInit {

  @Input() record: any;

  constructor() { }

  ngOnInit(): void {
  }

}
