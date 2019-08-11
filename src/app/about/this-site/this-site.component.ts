import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-this-site',
  templateUrl: './this-site.component.html',
  styleUrls: ['./this-site.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThisSiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
