import { ViewChild, Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

import {
  SdsDialogService,
  INavigationLink,
  NavigationMode,
} from "@gsa-sam/components";
import {
  SearchListConfiguration,
  SearchListLayoutComponent,
} from "@gsa-sam/layouts";

import { EntityReportingService } from "../../services/entity-reporting-service/entity-reporting.service";

import { awardFilters } from "./award-filters.data";

@Component({
  selector: "app-award-workspace",
  templateUrl: "./award-workspace.component.html",
  styleUrls: ["./award-workspace.component.css"],
})
export class AwardWorkspaceComponent implements OnInit {
  public subheaderSearchModel: {};

  public subheaderSearchSettings = {
    placeholder: "Enter an ID or keyword",
  };

  buttonLinks: INavigationLink[] = [
    {
      text: "Awards",
      mode: NavigationMode.INTERNAL,
      route: "/entity-reporting/awards",
    },
    {
      text: "Reporting",
      mode: NavigationMode.INTERNAL,
      route: "/entity-reporting/reporting",
    },
  ];

  public subheaderActions = {
    actions: [{ id: "download", icon: "bars", text: "Download" }],
  };

  @ViewChild("resultList", { static: true })
  resultList: SearchListLayoutComponent;

  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = awardFilters;

  public listModel: SearchListConfiguration = {
    defaultSortValue: "titleAscending",
    pageSize: 25,
    sortList: [
      { text: "Award Date: Newest First", value: "dateDescending" },
      { text: "Award Date: Oldest First", value: "dateDescending" },
      { text: "Title: A - Z", value: "titleAscending" },
      { text: "Title: Z - A", value: "titleDescending" },
    ],
  };

  filtersExpanded: boolean = true;

  public filterChange$ = new Subject<object>();

  constructor(
    public service: EntityReportingService,
    private route: ActivatedRoute,
    public router: Router,
    private location: Location,
    private change: ChangeDetectorRef,
    public dialog: SdsDialogService
  ) {}

  ngOnInit() {
    this.resultList.updateFilter(this.filterModel);
    this.filterChange$.subscribe((res) => {
      this.filterModel = res;
      this.resultList.updateFilter(res);
    });
  }

  subheaderActionClicked(event) {
    console.log(`%cLog: ${event}`, "color: blue; font-weight: bold");
  }

  resetAll() {
    this.filterModel = {};
  }

  openDownloadDialog() {}

  openSaveDialog() {}

  openSaveAsDialog() {}

  actionClicked(action) {}

  log(value) {
    console.log(`%cLog: ${value}`, "color: blue; font-weight: bold");
  }

  search() {
    this.router.navigate(["/search"], {
      queryParams: { index: "all", keyword: "hello" },
    });
  }
}
