import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';
import { Statistic } from '../../services/interfaces/public-apis';
import { ContractOpportunitiesService } from '../../services/contract-opportunities-service/contract-opportunities.service';

@Component({
  selector: 'contract-opportunities-dashboard',
  template: `
      <workspace-card [title]="title" [route]="route">
        <button class="usa-button usa-button--outline">Create Opportunity</button>
        <workspace-statistics>
           <workspace-statistic *ngFor="let statistic of statistics" [route]="route" [queryParams]="[statistic.key]"
            		[label]="statistic.label" [value]="statistic.value" [color]="statistic.color">
           </workspace-statistic>
        </workspace-statistics>
    </workspace-card>
    `
})
export class ContractOpportunitiesDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  statistics: Statistic[];

  constructor(private service: ContractOpportunitiesService) { 
    super();
  	this.title = "Contract Opportunities";
  	this.route = "/contract-opportunities/workspace";
  }

  ngOnInit(): void {
  	this.service.getStatistics().subscribe( (statistics: Statistic[]) =>
        {
          this.statistics = statistics;
        }
  	);
  }

}
