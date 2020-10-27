import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-builder',
  templateUrl: './search-builder.component.html',
  styleUrls: ['./search-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBuilderComponent implements OnInit {

  public subheaderSearchModel: {};

  public subheaderSearchSettings = {
    placeholder: 'Enter an ID or keyword'
  }

  public subheaderActions = {
    buttons: [],
    actions: [
      { id: 'downloadAction', icon: 'bars', text: 'Download' },
      { id: 'saveAction', icon: 'bars', text: 'Save' },
      { id: 'saveAsAction', icon: 'bars', text: 'Save As' }
    ]
  };

  constructor(private location: Location) { }

  ngOnInit() {
  }

  search() {

  }

  log(event) {

  }

  back() {
      this.location.back();
  }

}
