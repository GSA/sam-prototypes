import { Component, OnInit } from '@angular/core';
import { SamDomain } from '../../model/sam-domain';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'databank-home',
  templateUrl: './databank-home.component.html',
  styleUrls: ['./_styles.scss']
})
export class DatabankHomeComponent implements OnInit {

  domain: SamDomain = {
    title: 'Databank',
    key: 'databank',
    placeholder: 'Search All Databank'
  }

 constructor(public model: SamModelService) { }

  ngOnInit() {
  }

}
