import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'landing-search',
  templateUrl: './landing-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingSearchComponent implements OnInit {

  @Input() domain: string;

  model: any = {};
  form = new FormGroup({});
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
  	{
  		key: 'keyword',
  		type: 'search',
  		templateOptions: {
  			searchSettings: {
  			  id: 'keyword',
  			  size: 'large'
  			}
  		}
  	},
  	{
  		key: 'isactive',
  		type: 'checkbox',
  		templateOptions: {
  			label: 'Active Only',
  			hideOptional: true
  		}
  	}
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  search(searchForm) {
     this.router.navigate(['/search'], { queryParams: { index: this.domain } });
  }

}
