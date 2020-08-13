import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'alert-filters',
  templateUrl: './alert-filters.component.html',
  styleUrls: ['./alert-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertFiltersComponent implements OnInit {

  constructor() { }
  public model = {};

  config: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      type: 'input',
      templateOptions: {
          label: 'Keyword',
      }
    },
    {
      key: 'status',
      type: 'multicheckbox',
      templateOptions: { 
        label: 'Status',
        group: 'panel',
        options: [
            {
              key: 'active',
              value: 'Active'
            },
            {
              key: 'inactive',
              value: 'Inactive'
            }
          ]
       }
    }
  ];

  form = new FormGroup({});
  public filterChange$ = new BehaviorSubject<object>(null);  

  ngOnInit() {
  }

}
