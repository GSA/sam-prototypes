import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contract-data-result',
  templateUrl: './contract-data-result.component.html',
  styleUrls: ['./contract-data-result.component.scss']
})
export class ContractDataResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
