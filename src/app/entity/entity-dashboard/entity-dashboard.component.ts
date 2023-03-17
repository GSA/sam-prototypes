import { Component, OnInit } from '@angular/core';
import { VerticalTabComponent } from './vertical-tabs.component';
import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'app-entity-dashboard',
  templateUrl: './entity-dashboard.component.html',
})
export class EntityDashboardComponent implements OnInit {

  selectedTab: VerticalTabComponent;

  constructor(public model: EntityModelService) { }

  title: string = "(Unnamed Entity)";

  ngOnInit(): void {
  }

  selectTab(tab: VerticalTabComponent) {
    this.selectedTab = tab;
  }
}
