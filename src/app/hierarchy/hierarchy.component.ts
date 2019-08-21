import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { HierarchyService } from './service/hierarchy.service';
import { SDSHiercarchicalServiceResult } from '@gsa-sam/components';
import {
  SdsDialogService,
  // SdsDialogRef, 
  // SDS_DIALOG_DATA, 
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
  // SDSAutocompleteServiceInterface, 
  // SDSHiercarchicalServiceResult 
} from '@gsa-sam/components';

import { AgencyPickerService } from './service/agency-picker-service';
@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HierarchyComponent implements OnInit {
  filter = {};
  ngOnInit(): void {

    this.agencyPickerService.updateFilter(this.filter);
  }

  public inputValue: string = '';

  public selectModel: SDSSelectedItemModel = new SDSSelectedItemModel();


  advanced: boolean = false;

  constructor(public agencyPickerService: AgencyPickerService, public hierarchyService: HierarchyService) {

    this.agencyPickerService.filterUpdate.subscribe(
      (filter) => {

        this.updateFilter(filter);
      }
    )
  }

  private updateFilter(filter: any) {

    this.filter = filter;
    this.hierarchyService.filter = filter;
  }

  result: any;
  textChange() {
    this.hierarchyService.getDataSearchTerms(this.filter, this.inputValue).subscribe(
      (result: SDSHiercarchicalServiceResult) => {
        this.result = result.items;
      }
    );
  }
  change(values: any) {
    console.log(values.currentTarget.checked);
    
  }

  advanceClick() {
    this.advanced = !this.advanced;
  }

}
