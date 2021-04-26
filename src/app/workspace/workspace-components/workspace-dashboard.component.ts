import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StatisticsService } from '../../services/interfaces/public-apis';

@Component({
  selector: 'app-workspace-dashboard',
  template: `
  `,
})
export class WorkspaceDashboardComponent implements OnInit {

  private _title: string;
  private _route: string;
  private _queryParams: string[];

  get title():string {
  	return this._title;
  }

  set title(value: string) {
        this._title = value;
  }

  get route(): string {
  	return this._route;
  }

  set route(value: string) {
        this._route = value;
  }

  get queryParams(): string[] {
  	return this._queryParams;
  }

  set queryParams(value: string[]) {
        this._queryParams = value;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
