import { Component, OnInit, ChangeDetectionStrategy, Inject, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('resultsList') resultsListElement: ElementRef;
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
        this.filter = filter;
        this.updateFilter(filter);
        this.updateResults();
      }
    )
  }

  private updateFilter(filter: any) {

    this.filter = filter;
    this.hierarchyService.filter = filter;
  }

  result: any;
  textChange() {
    this.updateResults();
  }
  private updateResults() {
    this.hierarchyService.getDataSearchTerms(this.filter, 0, this.inputValue).subscribe((result: SDSHiercarchicalServiceResult) => {
      this.result = result.items;
    });
  }

  change(values: any) {
    console.log(values.currentTarget.checked);

  }

  advanceClick() {
    this.updateResults();
    this.dialogRef = this.dialog.open(this.overlay);
  }

  onScroll() {

    let scrollAreaHeight = this.resultsListElement.nativeElement.offsetHeight;
    let scrollTopPos = this.resultsListElement.nativeElement.scrollTop;
    let scrollAreaMaxHeight = this.resultsListElement.nativeElement.scrollHeight;
    if ((scrollTopPos + scrollAreaHeight * 2) >= scrollAreaMaxHeight) {
      this.hierarchyService.getDataSearchTerms(this.filter, this.result.length, this.inputValue).subscribe((result: SDSHiercarchicalServiceResult) => {
        this.result = this.result.concat(result.items);
      });
    }


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
