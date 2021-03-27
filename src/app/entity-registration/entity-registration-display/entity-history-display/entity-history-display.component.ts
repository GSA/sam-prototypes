import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-entity-history-display',
  templateUrl: './entity-history-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityHistoryDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
