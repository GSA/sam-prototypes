import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Observable, of } from 'rxjs';

import {
    SdsDialogService,
    SdsDialogRef,
    SDS_DIALOG_DATA,
    SDSAutocompletelConfiguration,
    SDSSelectedItemModel,
    SelectionMode,
    SDSAutocompleteServiceInterface,
    SDSHiercarchicalServiceResult,
    SDSSelectedItemModelHelper
} from '@gsa-sam/components';
import { AgencyPickerService } from '../service/agency-picker-service';
import { HierarchyService } from '../service/hierarchy.service';



@Component({
    selector: 'agency-picker',
    templateUrl: './agency-picker.component.html',
    styleUrls: ['./agency-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [HierarchyService]
})
export class AgencyPickerComponent implements OnInit {

    public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
    public selectModel: SDSSelectedItemModel = new SDSSelectedItemModel();
    private filter: any = {};

    /**
     * 
     */
    @Input() level: number = 0;

    constructor(public service: HierarchyService, private agencyPickerService: AgencyPickerService) {
        this.service.level = this.level;
        this.setup();
        this.agencyPickerService.filterUpdate.subscribe(
            (filter) => {

                this.updateFilter(filter);
            }
        )
    }

    private updateFilter(filter: any) {
        this.filter = filter;
        this.service.filter = filter;
    }

    public addItem(item: any) {
        this.selectModel.items.push(item);
    }

    private setupSettings(labelText: string, controlId: string) {
        this.settings.primaryKeyField = 'id';
        this.settings.id = controlId;
        this.settings.labelText = labelText;
        this.settings.primaryTextField = 'id';
        this.settings.secondaryTextField = 'name';
        this.settings.selectionMode = SelectionMode.MULTIPLE;
        this.settings.autocompletePlaceHolderText = 'Enter ID or Name';
    }

    ngOnInit() {
        this.service.level = this.level;
        this.setup();
    }

    levelLabels: string[] = ['Federal Hierarchy', 'Dept / Ind. Agency', 'Subtier', 'Major Command', 'Sub Command', 'Sub Command', 'Sub Command', 'Office'];

    setup() {

        switch (this.level) {
            case 0:
                this.setupSettings('Federal Hierarchy', 'federalHierarchy');
                break;
            case 1:
                this.setupSettings('Dept / Ind. Agency', 'dept');
                break;
            case 2:
                this.setupSettings('Subtier', 'subtier');
                break;
            case 3:
                this.setupSettings('Major Command', 'major');
                break;
            case 4:
            case 5:
            case 6:
                this.setupSettings('Sub Command', 'subcomm');
                break;
            case 7:
                this.setupSettings('Office', 'office');
                break;
            default:
                break;
        }
    }

    getLabel(item): string {
        return this.levelLabels[item.level];
    }

    change(value) {
        if (this.filter) {
            this.filter[this.level] = value;
            this.agencyPickerService.updateFilter(this.filter);
        }
    }
}
