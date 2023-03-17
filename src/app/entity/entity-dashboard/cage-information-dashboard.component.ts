import { Component, OnInit } from '@angular/core';
import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'cage-information-dashboard',
  templateUrl: './cage-information-dashboard.component.html',
})
export class CageInformationDashboardComponent implements OnInit {

  constructor(public model: EntityModelService) { }

  ngOnInit(): void {
  }

}
