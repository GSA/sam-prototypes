import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
