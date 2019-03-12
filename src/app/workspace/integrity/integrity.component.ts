import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-integrity',
  templateUrl: './integrity.component.html',
  styleUrls: ['./integrity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
