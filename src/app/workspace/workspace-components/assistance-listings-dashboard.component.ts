import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';
import { Statistic } from '../../services/interfaces/public-apis';
import { AssistanceService } from '../../services/assistance-service/assistance.service';

@Component({
  selector: 'assistance-listings-dashboard',
  template: `
      <workspace-card [title]="title" [route]="route">
      <button class="usa-button usa-button--outline">Create Listing</button>
        <div class="grid-row grid-gap">
          <div class="grid-col-auto">
            <workspace-statistics>
            	<workspace-statistic *ngFor="let statistic of statistics" [route]="route" [queryParams]="[statistic.key]"
            		[label]="statistic.label" [value]="statistic.value" [color]="statistic.color">
            	</workspace-statistic>
            </workspace-statistics>
          </div>
          <div class="grid-col-fill margin-right-1">
            <ul>
              <li><a class="usa-link" [routerLink]="['/workspace']">Assistance Listing Template</a></li>
              <li><a class="usa-link" [routerLink]="['/assistance-listings/workspace/regional-locations']">Regional Assistance Locations</a></li>
              <li><a class="usa-link" [routerLink]="['/assistance-listings/workspace/cfda-numbers']">CFDA Numbers</a></li>
            </ul>
          </div>
        </div>
    </workspace-card>
  `
})
export class AssistanceListingsDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  statistics: Statistic[];

  constructor(public service: AssistanceService) { 
    super();
  	this.title = "Assistance Listings";
  	this.route = "/assistance-listings/workspace";
  }

  ngOnInit(): void {
  	this.service.getStatistics().subscribe( (statistics: Statistic[]) =>
        {
          this.statistics = statistics;
        }
  	);
  }

}
