import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'integrity-result',
  templateUrl: './integrity-result.component.html',
  styleUrls: ['./integrity-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrityResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
