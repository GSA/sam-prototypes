import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { RequestsService } from '../../services/feed-services/requests.service';

@Component({
  selector: 'request-filters',
  template: `
  <sds-filters #filters [advancedFilters]="false" [form]="form"
    [fields]="fields" [model]="filterModel">
    </sds-filters>
  `,
})
export class RequestFiltersComponent implements OnInit {

  public filterModel = {
    unused: true
  };

  form = new FormGroup({});

  public fields: FormlyFieldConfig[] = [
  {
      key: 'keyword',
      type: 'input',
      templateOptions: {
          label: 'Keyword',
          hideOptional: true
      }
    },
    {
      key: 'domain',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Domain',
        group: 'panel',
        expand: false,
        options: []
      }
   }
  ];

  constructor(public requestsService: RequestsService) { 
      this.requestsService.getDomains().subscribe((domains: any[]) =>
      {
        this.fields[1].templateOptions.options = domains;
      });
  }

  ngOnInit(): void {
  }

}
