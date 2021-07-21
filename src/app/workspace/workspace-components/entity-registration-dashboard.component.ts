import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';
import { Statistic } from '../../services/interfaces/public-apis';
import { EntityRegistrationService } from '../../services/entity-registration-service/entity-registration.service';

@Component({
  selector: 'entity-registration-dashboard',
  template: `
    <workspace-card [title]="title" [route]="route">
      <button class="usa-button usa-button--outline">Get Started</button>
      <p><a [routerLink]="['/']">What do I need for registration?</a></p>
      <workspace-statistics>
      	<workspace-statistic *ngFor="let statistic of statistics" [route]="route" [queryParams]="[statistic.key]"
         		[label]="statistic.label" [value]="statistic.value" [color]="statistic.color">
      	</workspace-statistic>
      </workspace-statistics>
    </workspace-card>
  `
})
export class EntityRegistrationDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  statistics: Statistic[];

  constructor(private service: EntityRegistrationService) { 
    super();
  	this.title = "Entity Registration";
  	this.route = "/entity-registration/workspace";
  }

  ngOnInit(): void {
  	this.service.getStatistics().subscribe( (statistics: Statistic[]) =>
        {
          this.statistics = statistics;
        }
  	);
  }

}
