import { Component, OnInit } from '@angular/core';
import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'entity-relationships-dashboard',
  templateUrl: './entity-relationships-dashboard.component.html',
})
export class EntityRelationshipsDashboardComponent implements OnInit {

  constructor(public model: EntityModelService) { }

  ngOnInit(): void {
  }

}
