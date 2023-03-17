import { Component, OnInit } from '@angular/core';
import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'validations-overview-dashboard',
  templateUrl: './validations-overview-dashboard.component.html',
})
export class ValidationsOverviewDashboardComponent implements OnInit {

  constructor(public model: EntityModelService) { }

  ngOnInit(): void {
  }

}
