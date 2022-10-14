import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";

import { AssistancelistService } from "./service/assistancelist.service";
import { SearchListConfiguration } from "@gsa-sam/layouts";
import { FormlyFieldConfig } from "@ngx-formly/core";

import { filter, map } from "rxjs/operators";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

import { assistanceFilters } from "./filter.config";

import { workspaceSideNavigationData } from "../../common/workspace/navigation.data";

@Component({
  selector: "assistancelist",
  templateUrl: "./assistancelist.component.html",
  styleUrls: ["./assistancelist.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistancelistComponent implements OnInit {
  subheader = {
    actions: [
      { id: "downloadAction", icon: "downloadAction", text: "Download" },
    ],
  };

  navigationModel = workspaceSideNavigationData;

  @ViewChild("resultList", { static: true }) resultList;

  form = new FormGroup({});

  model = {};

  filters = assistanceFilters;

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

  constructor(
    public service: AssistancelistService,
    private change: ChangeDetectorRef
  ) {}

  configuration: SearchListConfiguration = {
    defaultSortValue: "cfdaAscending",
    pageSize: 25,
    sortList: [
      { text: "CFDA Number (Low - High)", value: "cfdaAscending" },
      { text: "CFDA Number (High - Low)", value: "cfdaDescending" },
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
