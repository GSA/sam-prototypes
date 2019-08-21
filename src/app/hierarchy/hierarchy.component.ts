import { Component, OnInit, ChangeDetectionStrategy, Inject, TemplateRef, ViewChild } from '@angular/core';
import { HierarchyService } from './service/hierarchy.service';
import { SDSHiercarchicalServiceResult } from '@gsa-sam/components';
import {
  SdsDialogService, SdsDialogRef, SDS_DIALOG_DATA,
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
  // SDSAutocompleteServiceInterface, 
  // SDSHiercarchicalServiceResult 
} from '@gsa-sam/components';
import { AgencyPickerComponent } from './agency-picker/agency-picker.component';
import { AgencyPickerService } from './service/agency-picker-service';
@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HierarchyComponent implements OnInit {
  filter = {};

  @ViewChild('overlay')
  private overlay: TemplateRef<any>;

  @ViewChild('picker')
  private picker: AgencyPickerComponent;
  ngOnInit(): void {

    this.agencyPickerService.updateFilter(this.filter);
  }

  public inputValue: string = '';

  public selectModel: SDSSelectedItemModel = new SDSSelectedItemModel();


  dialogRef: SdsDialogRef<any, any>;
  constructor(public dialog: SdsDialogService,
    public agencyPickerService: AgencyPickerService,
    public hierarchyService: HierarchyService) {

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

    this.dialogRef = this.dialog.open(this.overlay);


  }

  selectClick() {
    for (let i = 0; i < this.result.length; i++) {
      let item = this.result[i];
      if (item.isChecked) {
        this.picker.addItem(item);
      }
    }
    this.dialogRef.close();
  }

  cancelClick() {
    this.dialogRef.close();
  }
}
