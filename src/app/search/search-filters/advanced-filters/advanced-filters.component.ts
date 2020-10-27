import { Component, OnInit, Inject } from '@angular/core';

import { SDS_DIALOG_DATA } from '@gsa-sam/components';

@Component({
  selector: 'advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
})
export class AdvancedFiltersComponent implements OnInit {

  constructor(@Inject(SDS_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

}
