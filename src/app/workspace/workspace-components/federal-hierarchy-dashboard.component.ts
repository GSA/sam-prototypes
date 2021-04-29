import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';
import { Statistic, StatisticsGroup } from '../../services/interfaces/public-apis';
import { HierarchyService } from '../../services/hierarchy-service/hierarchy.service';

@Component({
  selector: 'federal-hierarchy-dashboard',
  template: `
    <workspace-card [title]="title" [route]="route">
        <div class="grid-row grid-gap">
          <div class="grid-col-auto">
            <div class="text-center margin-bottom-05">
                Events in the <strong>Previous 90 Days</strong>
            </div>
            <workspace-statistics-square>
            	<workspace-statistic-square *ngFor="let statistic of statistics[0].statistics" [route]="route" [queryParams]="[statistic.key]"
            		[label]="statistic.label" [value]="statistic.value" [color]="statistic.color">
            	</workspace-statistic-square>
            </workspace-statistics-square>
          </div>
          <div class="grid-col-auto">
            <div class="text-center margin-bottom-05">
                Events in the <strong>Next 90 Days</strong>
            </div>
			<workspace-statistics-square>
            	<workspace-statistic-square *ngFor="let statistic of statistics[1].statistics" [route]="route" [queryParams]="[statistic.key]"
            		[label]="statistic.label" [value]="statistic.value" [color]="statistic.color">
            	</workspace-statistic-square>
            </workspace-statistics-square>
          </div>
        </div>
    </workspace-card>
  `
})
export class FederalHierarchyDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  statistics: StatisticsGroup[];

  constructor(public service: HierarchyService) { 
    super();
  	this.title = "Federal Hierarchy";
  	this.route = "/federal-hierarchy/workspace";
  }

  ngOnInit(): void {
  	this.service.getStatistics().subscribe( (statistics: Statistic[]) =>
        {
          this.statistics = statistics as StatisticsGroup[];
        }
  	);
  }

}
