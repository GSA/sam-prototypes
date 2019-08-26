import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wage',
  templateUrl: './wage.component.html',
  styleUrls: ['./wage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
