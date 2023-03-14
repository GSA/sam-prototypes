import { Component, OnInit } from '@angular/core';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { EntityModelService } from '../entity-model/entity-model.service';

@Component({
  selector: 'app-entity-start',
  templateUrl: './entity-start.component.html'
})
export class EntityStartComponent implements OnInit {

  validateStepsOnInit = true;
  showLoading = false;

  stepMap = {
    surveyqone: {
      validationFn: () => true,
    }
  };

  currentStepId: string;
  stepValidityMap = {};

  linear = false;
  reinitializeComponents = false;

  constructor(public model: EntityModelService) {

  }

  ngOnInit(): void {
  }

  onSaveData(data: { model: any; metadata: any }) {
    console.log(data);
  }

  toggleLinearMode() {
    this.linear = !this.linear;
  }

}
