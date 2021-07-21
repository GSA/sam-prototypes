import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'search-result',
  template: `
  	<p>{{title}}</p>
  	<ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit(): void {
  }

}
