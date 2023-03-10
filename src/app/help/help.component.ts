import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BehaviorSubject } from "rxjs";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { UntypedFormGroup } from "@angular/forms";
import { CdkAccordionItem } from "@angular/cdk/accordion";

import { SideNavigationModel, NavigationMode } from "@gsa-sam/components";
import { helpNavigationData } from "./navigation/navigation.data";
import { HelpFiltersService } from "./help-filters/help-filters.service";

import { HelpService } from "./service/help.service";

@Component({
  selector: "sam-help",
  templateUrl: "./help.component.html",
})
export class HelpComponent implements OnInit, AfterViewInit {
  public searchModel: {};

  public searchSettings = {
    placeholder: "Enter a keyword",
  };

  domainLabelMap: Map<string, string> = new Map<string, string>([
    ["opportunities", "Contract Opportunities"],
    ["contractdata", "Contract Data"],
    ["assistancelist", "Assistance Listings"],
    ["entityinfo", "Entity Information"],
    ["hierarchy", "Federal Hierarchy"],
    ["wages", "Wage Determinations"],
  ]);

  domainLabel: string;
  @ViewChild("filtersAccordion", { static: true })
  filtersAccordion: CdkAccordionItem;

  public sideNavModel: SideNavigationModel = helpNavigationData;

  form = new UntypedFormGroup({});
  public filterChange$ = new BehaviorSubject<object>(null);

  public pageActions = {
    actions: [{ id: "DownloadBtn", icon: "bars", text: "Download" }],
  };

  constructor(
    private change: ChangeDetectorRef,
    private route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public service: HelpService,
    public filtersService: HelpFiltersService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe((data) => {
      let domain =
        typeof data["index"] === "string" ? decodeURI(data["index"]) : "all";
      this.setDomain(domain);
    });
    this.change.detectChanges();
  }

  setDomain(domain: string) {
    let label = this.domainLabelMap.get(domain);
    this.domainLabel = label ? label : "All Domains";
    if (this.filtersAccordion && !this.filtersAccordion.expanded) {
      this.filtersAccordion.toggle();
    }
  }

  search() {
    this.router.navigate(["/help/results"], {
      queryParams: { keyword: "hello" },
    });
  }

  log(value) {
    console.log(`%cLog: ${value}`, "color: blue; font-weight: bold");
  }
}
