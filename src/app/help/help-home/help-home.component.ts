import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-help-home',
  templateUrl: './help-home.component.html',
  styleUrls: ['./help-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpHomeComponent implements OnInit {

  public model: {};

  public searchSettings = {
    size: 'large'
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
      console.log('Searching...');
      this.router.navigate(['/help/results'], { queryParams: { index: 'wages' } });
  }

}
