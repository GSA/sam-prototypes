import { Component, OnInit } from '@angular/core';
import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'sections-overview-dashboard',
  templateUrl: './sections-overview-dashboard.component.html'
})
export class SectionsOverviewDashboardComponent implements OnInit {

  constructor(public model: EntityModelService) { }

  ngOnInit(): void {
  }

}
