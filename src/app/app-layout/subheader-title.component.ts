import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'subheader-title',
  template: `
  	  <span class="sds-navbar__title">
        {{title}}
      </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderTitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
