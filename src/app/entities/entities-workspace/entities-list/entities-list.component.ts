import { Component, OnInit, Input } from '@angular/core';
import { SamModelService } from '../../../model/sam-model.service';

@Component({
  selector: 'entity-workspace',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./_styles.scss']
})
export class EntitiesListComponent implements OnInit {

  view: string;

  constructor(public model: SamModelService) {  
    this.view = 'open';
  }

  setView(view: string) {
    this.view = view;
  }

  ngOnInit() {
  }

}
