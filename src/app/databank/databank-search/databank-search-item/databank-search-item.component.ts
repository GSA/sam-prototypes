import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'databank-search-item',
  templateUrl: './databank-search-item.component.html',
  styleUrls: ['./databank-search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatabankSearchItemComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
