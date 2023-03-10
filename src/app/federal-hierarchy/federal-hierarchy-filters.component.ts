import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "federal-hierarchy-filters",
  template: `
    <sds-filters
      #filters
      [advancedFilters]="false"
      [form]="form"
      [fields]="fields"
      [model]="filterModel"
    >
    </sds-filters>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FederalHierarchyFiltersComponent implements OnInit {
  public filterModel = {
    unused: true,
    elementKey: "100000000",
  };

  form = new UntypedFormGroup({});

  public fields: FormlyFieldConfig[] = [
    {
      key: "keyword",
      type: "input",
      templateOptions: {
        label: "Keyword",
        hideOptional: true,
      },
    },
    {
      key: "level",
      type: "multicheckbox",
      templateOptions: {
        label: "Hierarchy Level",
        group: "accordion",
        expand: false,
        options: [
          { label: "Sub Tier", value: "SUB TIER" },
          { label: "Major Command", value: "MAJOR COMMAND" },
          { label: "Sub Command", value: "SUB COMMAND" },
          { label: "Office", value: "OFFICE" },
        ],
      },
    },
    {
      key: "officeType",
      type: "multicheckbox",
      templateOptions: {
        label: "Office Type",
        group: "accordion",
        expand: false,
        options: [
          { label: "Funding", value: "funding" },
          { label: "Awarding", value: "awarding" },
        ],
      },
    },
    {
      key: "status",
      type: "multicheckbox",
      templateOptions: {
        label: "Status",
        group: "accordion",
        expand: false,
        options: [
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" },
        ],
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
