import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sam-body',
  templateUrl: './sam-body.component.html',
  styleUrls: ['./sam-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SamBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
