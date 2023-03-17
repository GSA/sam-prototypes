import { Component, OnInit } from '@angular/core';
import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'socio-economic-dashboard',
  templateUrl: './socio-economic-dashboard.component.html',
})
export class SocioEconomicDashboardComponent implements OnInit {

  constructor(public model: EntityModelService) { }

  ngOnInit(): void {
  }

}
