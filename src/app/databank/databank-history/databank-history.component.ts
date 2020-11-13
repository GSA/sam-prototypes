import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-databank-history',
  templateUrl: './databank-history.component.html',
  styleUrls: ['./databank-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatabankHistoryComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back() {
      this.location.back();
  }

}
