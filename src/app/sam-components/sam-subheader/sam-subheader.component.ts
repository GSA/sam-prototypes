import { Component, OnInit } from '@angular/core';
import { SamModelService } from '../../model/sam-model.service';
import { SamDomain } from '../../model/sam-domain';
import { AllDomains } from './sam-subheader.config';

@Component({
  selector: 'sam-subheader',
  templateUrl: './sam-subheader.component.html',
  styleUrls: ['./_styles.scss', '_structure.scss']
})
export class SamSubheaderComponent implements OnInit {

  allDomains: SamDomain[] = AllDomains;

  contractingDomains: SamDomain[] = [
  ];

  assistanceDomains: SamDomain[] [

  ];

  constructor(public model: SamModelService) { 
  }

  ngOnInit() {
  }

}
