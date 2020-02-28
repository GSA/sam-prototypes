import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'opportunity-result',
  templateUrl: './opportunity-result.component.html',
  styleUrls: ['./opportunity-result.component.scss']
})
export class OpportunityResultComponent implements OnInit {

  @Input() model: any;
  public no_html = /(<([^>]+)>)/ig;

  constructor() { }

  ngOnInit() {
  }

}
