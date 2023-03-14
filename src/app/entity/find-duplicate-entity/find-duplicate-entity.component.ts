import { Component, OnInit } from '@angular/core';
import { TabPanelComponent } from '@gsa-sam/components';

@Component({
  selector: 'app-find-duplicate-entity',
  templateUrl: './find-duplicate-entity.component.html',
})
export class FindDuplicateEntityComponent implements OnInit {

  selectedTab: TabPanelComponent;

  entities: any = [
    {
        legalBusinessName: 'ABC Medical Supplies, Inc',
        status: 'In Progress',
        lastUpdated: 'Mar 2, 2023',
        city: 'Atlanta',
        state: 'Georgia'
    },
    {
        legalBusinessName: 'ABC Lab Services, Inc',
        status: 'In Progress',
        lastUpdated: 'Feb 12, 2023',
        city: 'Newark',
        state: 'New Jersey'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab: TabPanelComponent) {
    this.selectedTab = tab;
  }


}
