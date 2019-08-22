import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Observable, of } from 'rxjs';

import { SdsDialogService, 
         SdsDialogRef, 
         SDS_DIALOG_DATA, 
         SDSAutocompletelConfiguration, 
         SDSSelectedItemModel, 
         SelectionMode, 
         SDSAutocompleteServiceInterface, 
         SDSHiercarchicalServiceResult 
       } from '@gsa-sam/components';

import { HierarchyService } from '../service/hierarchy.service';
import { HierarchyData } from '../service/hierarchy-data';

const levelLabels: string[] = [ 'Federal Hierarchy', 'Dept / Ind. Agency', 'Subtier', 'Major Command', 'Sub Command 1', 'Sub Command 2', 'Sub Command 3', 'Office'];

class ServiceWrapper implements SDSAutocompleteServiceInterface {

    level: number;

    constructor(public service: HierarchyService) {}

	getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
		return this.service.getDataByText(this.level, currentItems, searchValue);
	}

	selectNodes(items: HierarchyData[]) {
		this.service.selectNodes(items);
	}
}

@Component({
  selector: 'agency-picker',
  templateUrl: './agency-picker.component.html',
  styleUrls: ['./agency-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyPickerComponent implements OnInit {

  public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  public selectModel: SDSSelectedItemModel = new SDSSelectedItemModel();
  public service: ServiceWrapper;

  @Input() level: number;
  @Input() isEditable: boolean = true;

  public isEditMode: boolean = false;

  constructor(hierarchyService: HierarchyService) { 
    this.service = new ServiceWrapper(hierarchyService);
  }

  ngOnInit() {
  	this.settings.primaryKeyField = 'id';
	this.settings.id = 'settings' + this.level;
	this.settings.labelText = levelLabels[this.level];
	this.settings.primaryTextField = 'id';
	this.settings.secondaryTextField = 'name';
	this.settings.selectionMode = SelectionMode.MULTIPLE;
	this.settings.autocompletePlaceHolderText = 'Enter ID or Name';

	this.service.level = this.level;
  }

  toggleEdit() {
  	this.isEditMode = !this.isEditMode;
  }

  getLabel() : string {
  	return levelLabels[this.level];
  }

  selectAgency(agency: HierarchyData) {
  }

  change(value) {
    if(value.items.length > 0) {
    	this.service.selectNodes(value.items);
    }
  }

}
