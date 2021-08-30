import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-services',
  templateUrl: './data-services.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DataServicesComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter a file name'
  }

  constructor(
    private router: Router) {}

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/dataservices/downloads']);
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
