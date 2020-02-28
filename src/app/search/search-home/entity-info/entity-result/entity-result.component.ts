import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'entity-result',
  templateUrl: './entity-result.component.html',
  styleUrls: ['./entity-result.component.scss']
})
export class EntityResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
