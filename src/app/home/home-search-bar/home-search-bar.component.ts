import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { UntypedFormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "home-search-bar",
  template: `
    <form [formGroup]="form">
      <formly-form
        [model]="model"
        [fields]="fields"
        [options]="options"
        [form]="form"
      ></formly-form>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSearchBarComponent implements OnInit {
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "searchBar",
      type: "search",
      modelOptions: {
        updateOn: "blur",
      },
      templateOptions: {
        ariaHidden: true,
        submitHandler: this.search,
        router: this.router,
        searchSettings: {
          id: "domainSearch",
          size: "large",
          dropdown: {
            options: [
              { value: "all", label: "Select Domain..." },
              { value: "assistancelist", label: "AssistanceListings" },
              { value: "opportunities", label: "Contract Opportunities " },
              { value: "entity-info", label: "Entity Information" },
              { value: "federalHierarchy", label: "Federal Hierarchy" },
              { value: "wdid", label: "Wage Determinations" },
            ],
          },
        },
      },
    },
  ];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  search(value) {
    this.router.navigate(["/search"], {
      queryParams: { index: value.searchCategory, keyword: value.searchText },
    });
  }
}
