import { Component, OnInit } from '@angular/core';
import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'overview-dashboard',
  templateUrl: './overview-dashboard.component.html'
})
export class OverviewDashboardComponent implements OnInit {

  constructor(public model: EntityModelService) { }

  ngOnInit(): void {
  }

}
