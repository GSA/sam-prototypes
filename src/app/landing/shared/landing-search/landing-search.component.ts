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

  model: any = {
  	isactive: true
  };
  form = new FormGroup({});
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
  	{
  		key: 'keyword',
  		type: 'search',
  		templateOptions: {
            submitHandler: this.search,
            router: this.router,
            model: this.model,
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

  constructor(public router: Router) {
  }

  ngOnInit(): void {

  }

  search(searchTerms) {
     this.router.navigate(['/search'], { queryParams: { index: this.domain } });
  }

}
