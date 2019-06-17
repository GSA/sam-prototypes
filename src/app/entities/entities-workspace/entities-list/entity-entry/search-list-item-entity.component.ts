import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'search-result-list-item-entity',
  templateUrl: 'search-list-item-entity.component.html'
})

export class SearchResultListEntityDataItemComponent {

  constructor(private change: ChangeDetectorRef) { }

  @Input() model;

}