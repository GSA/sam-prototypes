import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sca-result',
  templateUrl: './sca-result.component.html',
  styleUrls: ['./sca-result.component.scss']
})
export class ScaResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
