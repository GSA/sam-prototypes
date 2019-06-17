import { Component, OnInit, Input } from '@angular/core';
import { SamModelService } from '../../../model/sam-model.service';
import { EntityService } from '../../entities-service/entity.service';
import { SearchListConfiguration } from '@gsa-sam/layouts';
@Component({
  selector: 'entity-workspace',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./_styles.scss']
})
export class EntityListComponent implements OnInit {



  constructor(public service: EntityService) {

  }

  configuration: SearchListConfiguration = {
    defaultSortValue: '', pageSize: 25,
    sortList: [{ text: '', value: '' }]
  }



  ngOnInit() {
  }

}
