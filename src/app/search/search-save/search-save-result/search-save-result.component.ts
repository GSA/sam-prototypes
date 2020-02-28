import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-save-result',
  templateUrl: './search-save-result.component.html',
  styleUrls: ['./search-save-result.component.scss']
})
export class SearchSaveResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
