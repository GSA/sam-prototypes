import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { NotificationsService } from "../../services/feed-services/notifications.service";

@Component({
  selector: "notification-filters",
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
export class NotificationFiltersComponent implements OnInit {
  public filterModel = {
    unused: true,
  };

  form = new FormGroup({});

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
      key: "domain",
      type: "multicheckbox",
      templateOptions: {
        label: "Domain",
        group: "panel",
        expand: false,
        options: [],
      },
    },
  ];

  constructor(public notificationsService: NotificationsService) {
    this.notificationsService.getDomains().subscribe((domains: any[]) => {
      this.fields[1].templateOptions.options = domains;
    });
  }

  ngOnInit(): void {}
}
