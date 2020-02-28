import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dba-result',
  templateUrl: './dba-result.component.html',
  styleUrls: ['./dba-result.component.scss']
})
export class DbaResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
