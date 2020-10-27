import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contract-opportunity-result',
  templateUrl: './contract-opportunity-result.component.html',
  styleUrls: []
})
export class ContractOpportunityResultComponent implements OnInit {

  @Input() model: any;
  public no_html = /(<([^>]+)>)/ig;

  constructor() { }

  ngOnInit() {
  }

}
