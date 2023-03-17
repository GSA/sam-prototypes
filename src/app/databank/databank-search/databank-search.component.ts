import {
  ViewChild,
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnChanges,
} from "@angular/core";

import { Location } from "@angular/common";

import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  UrlSegment,
  NavigationStart,
} from "@angular/router";

import { FormlyFieldConfig } from "@ngx-formly/core";
import { CdkAccordionItem } from "@angular/cdk/accordion";
import {
  SideNavigationModel,
  NavigationMode,
  INavigationLink,
  SdsDialogService,
  SDS_DIALOG_DATA,
} from "@gsa-sam/components";

import { filter, map } from "rxjs/operators";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { SearchListConfiguration } from "@gsa-sam/layouts";

import { DatabankService } from "../../services/databank-service/databank.service";

import { filters } from "./filters.config";

@Component({
  selector: "app-databank-search",
  templateUrl: "./databank-search.component.html",
  styleUrls: ["./databank-search.component.scss"],
})
export class DatabankSearchComponent implements OnInit {
  public subheaderSearchModel: {};

  public subheaderSearchSettings = {
    placeholder: "Enter an ID or keyword",
  };

  listModel: SearchListConfiguration = {
    defaultSortValue: "relevanceDescending",
    pageSize: 25,
    sortList: [
      { text: "Relevance", value: "relevanceDescending" },
      { text: "Updated Date", value: "dateDescending" },
      { text: "Title: A - Z", value: "titleAscending" },
      { text: "Title: Z - A", value: "titleDescending" },
    ],
  };

  @ViewChild("resultList", { static: true }) resultList;

  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = filters;

  public filterChange$ = new BehaviorSubject<object>(null);

  constructor(
    public service: DatabankService,
    private route: ActivatedRoute,
    public router: Router,
    private location: Location,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.change.detectChanges();
    if (this.resultList) {
      this.resultList.updateFilter(this.filterModel);
    }
  }

  log(value) {
    console.log(`%cLog: ${value}`, "color: blue; font-weight: bold");
  }

  search() {
    console.log(`%cLog: search databank`, "color: blue; font-weight: bold");
  }

  resetAll() {
    this.filterModel = {};
  }

  openDownloadDialog() {}

  openSaveDialog() {}

  openSaveAsDialog() {}

  back() {
    this.location.back();
  }
}
