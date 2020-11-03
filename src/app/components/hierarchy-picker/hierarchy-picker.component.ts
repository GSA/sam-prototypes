import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult 
} from '@gsa-sam/components';

import { HierarchyService } from '../../services/hierarchy-service/hierarchy.service';

class AutocompleteHierarchyService implements SDSAutocompleteServiceInterface {

    parentKeys: string[] = [];

    constructor(public hierarchyService: HierarchyService, public level: number) {
    }

    setParents(parents) {
      this.parentKeys = [];
      for(let i=0; i<parents.length; i++) {
      	this.parentKeys.push(parents[i].key);
      }
    }

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
    	let result = this.hierarchyService.getDataForLevel(currentItems, this.parentKeys, this.level, searchValue);
    	return result;
    }
}

@Component({
  selector: 'hierarchy-picker',
  templateUrl: './hierarchy-picker.component.html',
  styleUrls: ['./hierarchy-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchyPickerComponent implements OnInit {

  departmentService;
  subtierService;
  majcomService;
  subcommandService;
  officeService;

  departmentSettings = new SDSAutocompletelConfiguration();
  subtierSettings = new SDSAutocompletelConfiguration();
  majcomSettings = new SDSAutocompletelConfiguration();
  subcommandSettings = new SDSAutocompletelConfiguration();
  officeSettings = new SDSAutocompletelConfiguration();

  departmentModel = new SDSSelectedItemModel();
  subtierModel = new SDSSelectedItemModel();
  majcomModel = new SDSSelectedItemModel();
  subcommandModel = new SDSSelectedItemModel();
  officeModel = new SDSSelectedItemModel();

  showAllLevel: boolean = false;

  constructor(hierarchyService: HierarchyService) { 
  	this.departmentService = new AutocompleteHierarchyService(hierarchyService, 1);
  	this.subtierService = new AutocompleteHierarchyService(hierarchyService, 2);
  	this.majcomService = new AutocompleteHierarchyService(hierarchyService, 3);
  	this.subcommandService = new AutocompleteHierarchyService(hierarchyService, 4);
  	this.officeService = new AutocompleteHierarchyService(hierarchyService, 5);
  	this.initSettings();
  }

  ngOnInit() {
  }

  departmentChanges(value) {
  	this.subtierService.setParents(value);
  }

  subtierChanges(value) {
  	this.officeService.setParents(value);
  }

  majcomChanges(value) {
  	this.subcommandService.setParents(value);
  }

  subcommandChanges(value) {
  	this.officeService.setParents(value);
  }

  officeChanges(value) {
  }

  initSettings() {
	this.departmentSettings.id = 'department';
	this.departmentSettings.primaryKeyField = 'key';
	this.departmentSettings.primaryTextField = 'displayLabel';
	this.departmentSettings.secondaryTextField = 'parentName';
	this.departmentSettings.labelText = 'Department / Ind. Agency';
	this.departmentSettings.selectionMode = SelectionMode.MULTIPLE;
	this.departmentSettings.autocompletePlaceHolderText = 'Enter an code or name';

	this.subtierSettings.id = 'subtier';
	this.subtierSettings.primaryKeyField = 'key';
	this.subtierSettings.primaryTextField = 'displayLabel';
	this.subtierSettings.secondaryTextField = 'parentName';
	this.subtierSettings.labelText = 'Subtier';
	this.subtierSettings.selectionMode = SelectionMode.MULTIPLE;
	this.subtierSettings.autocompletePlaceHolderText = 'Enter an code or name';

	this.majcomSettings.id = 'majcom';
	this.majcomSettings.primaryKeyField = 'org.fpdsCode';
	this.majcomSettings.primaryTextField = 'org.name';
	this.majcomSettings.secondaryTextField = 'parentName';
	this.majcomSettings.labelText = 'Major Command';
	this.majcomSettings.selectionMode = SelectionMode.MULTIPLE;
	this.majcomSettings.autocompletePlaceHolderText = 'Enter an code or name';

	this.subcommandSettings.id = 'subcommand';
	this.subcommandSettings.primaryKeyField = 'org.fpdsCode';
	this.subcommandSettings.primaryTextField = 'org.name';
	this.subcommandSettings.secondaryTextField = 'parentName';
	this.subcommandSettings.labelText = 'Subcommand';
	this.subcommandSettings.selectionMode = SelectionMode.MULTIPLE;
	this.subcommandSettings.autocompletePlaceHolderText = 'Enter an code or name';

	this.officeSettings.id = 'office';
	this.officeSettings.primaryKeyField = 'key';
	this.officeSettings.primaryTextField = 'displayLabel';
	this.officeSettings.secondaryTextField = 'parentName';
	this.officeSettings.labelText = 'Office';
	this.officeSettings.selectionMode = SelectionMode.MULTIPLE;
	this.officeSettings.autocompletePlaceHolderText = 'Enter an code or name';
  }
}
