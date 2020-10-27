import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'entity-registration-result',
  templateUrl: './entity-registration-result.component.html',
  styleUrls: []
})
export class EntityRegistrationResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
