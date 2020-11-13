import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-status-tracker',
  templateUrl: './status-tracker.component.html',
  styleUrls: ['./status-tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({});
  model: any = {};
  options:any=null;
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'grid-row grid-gap',
      fieldGroup: [
        {
          className: 'grid-col-8',
          type: 'input',
          key: 'uei-duns',
          templateOptions: {
            required: true,
            label: 'Unique Entity ID',
          }
        },
        {
          className: 'grid-col-4',
          key: 'eft-id',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'EFT Identifier'
          }
        }
      ],
    },
    {
      fieldGroupClassName: 'grid-row',
      fieldGroup: [
        {
          className: 'grid-col-6',
          type: 'input',
          key: 'cage',
          templateOptions: {
            required: true,
            label: 'CAGE / NCAGE'
          }
        }
      ]
    }];

  submit() {
  }

}
