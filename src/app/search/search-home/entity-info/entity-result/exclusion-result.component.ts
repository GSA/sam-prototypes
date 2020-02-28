import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'exclusion-result',
  templateUrl: './exclusion-result.component.html',
  styleUrls: ['./exclusion-result.component.scss']
})
export class ExclusionResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
