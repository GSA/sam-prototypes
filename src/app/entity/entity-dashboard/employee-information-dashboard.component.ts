import { Component, OnInit } from '@angular/core';
import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'employee-information-dashboard',
  templateUrl: './employee-information-dashboard.component.html',
})
export class EmployeeInformationDashboardComponent implements OnInit {

  constructor(public model: EntityModelService) { }

  ngOnInit(): void {
  }

}
