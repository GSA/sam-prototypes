import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { EntityData } from '../entity-service/entity.model';
@Component({
  selector: 'search-result-list-item-entity',
  templateUrl: 'search-list-item-entity.component.html'
})

export class SearchResultListEntityDataItemComponent {

  constructor(private change: ChangeDetectorRef) { }

  @Input() model: EntityData;

  menu = {
    trigger: 'primary',
    actions: [
      { id: 'ViewBtn', icon: 'bars', text: 'View' },
      { id: 'UpdateBtn', icon: 'bars', text: 'Update' },
      { id: 'DeactivateBtn', icon: 'bars', text: 'Deactivate' }
    ]
  };

  wipMenu = {
    trigger: 'primary',
    actions: [
      { id: 'ViewBtn', icon: 'bars', text: 'View' },
      { id: 'submitBtn', icon: 'bars', text: 'Submit' },
      { id: 'DeactivateBtn', icon: 'bars', text: 'Cancel' }
    ]
  };

  dualMenu = {
    trigger: 'primary',
    actions: [
      { id: 'ViewBtn', icon: 'bars', text: 'View' },
      { id: 'DeactivateBtn', icon: 'bars', text: 'Deactivate' }
    ]
  };

  submittedMenu = {
    trigger: 'primary',
    actions: [
      { id: 'ViewBtn', icon: 'bars', text: 'View' },
      { id: 'CancelBtn', icon: 'bars', text: 'Cancel' }
    ]
  };

  log(value) {
    console.log(`%cLog: ${value} clicked in result item ${this.model.entityRegistration.legalBusinessName}`, 'color: blue; font-weight: bold');
  }

}