import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app-service/app.service';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-hierarchy-landing-federal',
  templateUrl: './hierarchy-landing-federal.component.html',
  styleUrls: ['./hierarchy-landing-federal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchyLandingFederalComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an ID or keyword'
  }

  constructor(private router: Router, public service: AppService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search'], { queryParams: { index: 'hierarchy', keyword: 'hello' } });
  }
}
