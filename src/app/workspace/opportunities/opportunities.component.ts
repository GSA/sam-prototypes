import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";

import { OpportunitiesService } from "./service/opportunities.service";
import { SearchListConfiguration } from "@gsa-sam/layouts";

import { BehaviorSubject } from "rxjs";

import { opportunitiesFilters } from "./filter.config";

import { workspaceSideNavigationData } from "../../common/workspace/navigation.data";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-opportunities",
  templateUrl: "./opportunities.component.html",
  styleUrls: ["./opportunities.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OpportunitiesComponent implements OnInit {
  subheader = {
    actions: [
      { id: "downloadAction", icon: "downloadAction", text: "Download" },
    ],
  };

  navigationModel = workspaceSideNavigationData;

  @ViewChild("resultList", { static: true }) resultList;

  form = new FormGroup({});

  model = {};

  filters = opportunitiesFilters;

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

  constructor(
    public service: OpportunitiesService,
    private change: ChangeDetectorRef
  ) {}

  configuration: SearchListConfiguration = {
    defaultSortValue: "modifiedAscending",
    pageSize: 25,
    sortList: [
      { text: "Last Modified (Newest)", value: "modifiedAscending" },
      { text: "Last Modified (Oldest)", value: "modifiedDescending" },
      { text: "Solicitation ID (Low - High)", value: "isAscending" },
      { text: "Solicitation ID (High - Low)", value: "isDescending" },
      { text: "Title A - Z", value: "titleA-Z" },
      { text: "Title Z - A", value: "titleZ-A" },
    ],
  };

  ngOnInit() {}

  ngAfterViewInit() {
    this.change.detectChanges();
  }

  subheaderActionClicked(action) {}

  newAccount(event) {
    console.log(
      `%cLog: Creating new account`,
      "color: blue; font-weight: bold"
    );
  }

  newSearch(event) {
    console.log(`%cLog: Searching accounts`, "color: blue; font-weight: bold");
  }
}
