import { Component, OnInit } from '@angular/core';
import { SamDomain } from '../../model/sam-domain';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'contracting-home',
  templateUrl: './contracting-home.component.html',
  styleUrls: ['./_styles.scss']
})
export class ContractingHomeComponent implements OnInit {

  domain: SamDomain = {
    title: 'All Data',
    key: 'all',
    placeholder: 'Search All Data'
  }

  constructor(public model: SamModelService) { }

  ngOnInit() {
  }

}
