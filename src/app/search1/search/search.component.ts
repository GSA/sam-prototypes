import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { fields, model, } from '../data/formly';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { fieldsList, modelList, } from '../data/formly-list';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  domain: string;
  public form: FormGroup;

  public model;
  public fields: FormlyFieldConfig[];

  constructor(private route: ActivatedRoute, private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.domain = this.route.snapshot.queryParamMap.get('domain');
        const list = fieldsList.filter(x => x.domain == this.domain);
        const listModel = modelList.filter(x => x.domain == this.domain);

        this.fields = list[0].FormlyFields;
        this.model = listModel[0].model;
      }
    });
  }

  ngOnInit() {
  }
}
