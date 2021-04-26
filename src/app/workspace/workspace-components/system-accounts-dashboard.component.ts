import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';
import { Statistic } from '../../services/interfaces/public-apis';
import { SystemAccountsService } from '../../services/system-accounts-service/system-accounts.service';

@Component({
  selector: 'system-accounts-dashboard',
  template: `
   <workspace-card [title]="title" [route]="route">
        <button class="usa-button usa-button--outline">Request Account</button>
        <workspace-statistics>
           <workspace-statistic *ngFor="let statistic of statistics" [route]="route" [queryParams]="[statistic.key]"
            		[label]="statistic.label" [value]="statistic.value" [color]="statistic.color">
           </workspace-statistic>
        </workspace-statistics>
    </workspace-card>
  `
})
export class SystemAccountsDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  statistics: Statistic[];

  constructor(private service: SystemAccountsService) { 
    super();
  	this.title = "System Accounts";
  	this.route = "/system-accounts/workspace";
  }

  ngOnInit(): void {
  	this.service.getStatistics().subscribe( (statistics: Statistic[]) =>
        {
          this.statistics = statistics;
        }
  	);
  }

}
