import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {} from "@gsa-sam/components";
import {
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult,
  SDSSelectedItemModel,
  SDSAutocompletelConfiguration,
  SelectionMode,
} from "@gsa-sam/components";

@Injectable()
export class AwardIdvTypeService {
  public model: SDSSelectedItemModel = new SDSSelectedItemModel();
  public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  private data = [
    {
      id: "D_IDV",
      parentId: null,
      name: "BOA (IDV)",
      subtext: null,
      type: "D_IDV",
    },
    {
      id: "A_AWARD",
      parentId: null,
      name: "BPA CALL",
      subtext: null,
      type: "A_AWARD",
    },
    {
      id: "E_IDV",
      parentId: null,
      name: "BPA (IDV)",
      subtext: null,
      type: "E_IDV",
    },
    {
      id: "F_AWARD",
      parentId: null,
      name: "COOPERATIVE AGREEMENT",
      subtext: null,
      type: "F_AWARD",
    },
    {
      id: "C_AWARD",
      parentId: null,
      name: "DELIVERY ORDER",
      subtext: null,
      type: "C_AWARD",
    },
    {
      id: "D_AWARD",
      parentId: null,
      name: "DEFINITIVE CONTRACT",
      subtext: null,
      type: "D_AWARD",
    },
    {
      id: "S_AWARD",
      parentId: null,
      name: "FUNDED SPACE ACT AGREEMENT",
      subtext: null,
      type: "S_AWARD",
    },
    {
      id: "C_IDV",
      parentId: null,
      name: "FSS (IDV)",
      subtext: null,
      type: "C_IDV",
    },
    {
      id: "G_AWARD",
      parentId: null,
      name: "GRANT FOR RESEARCH",
      subtext: null,
      type: "G_AWARD",
    },
    {
      id: "A_IDV",
      parentId: null,
      name: "GWAC (IDV)",
      subtext: null,
      type: "A_IDV",
    },
    {
      id: "B_IDV",
      parentId: null,
      name: "IDC (IDV)",
      subtext: null,
      type: "B_IDV",
    },
    {
      id: "I_AWARD",
      parentId: null,
      name: "INTRAGOVERNMENTAL",
      subtext: null,
      type: "I_AWARD",
    },
    {
      id: "O_AWARD",
      parentId: null,
      name: "OTHER TRANSACTION ORDER",
      subtext: null,
      type: "O_AWARD",
    },
    {
      id: "R_AWARD",
      parentId: null,
      name: "OTHER TRANSACTION AGREEMENT",
      subtext: null,
      type: "R_AWARD",
    },
    {
      id: "O_IDV",
      parentId: null,
      name: "OTHER TRANSACTION (IDV)",
      subtext: null,
      type: "O_IDV",
    },
    {
      id: "B_AWARD",
      parentId: null,
      name: "PURCHASE ORDER",
      subtext: null,
      type: "B_AWARD",
    },
    {
      id: "T_AWARD",
      parentId: null,
      name: "TRAINING GRANT",
      subtext: null,
      type: "T_AWARD",
    },
  ];

  constructor() {
    this.settings.id = "award_type";
    this.settings.primaryKeyField = "name";
    this.settings.primaryTextField = "name";
    this.settings.secondaryTextField = null;
    this.settings.labelText = "name";
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = "Select...";
    this.settings.debounceTime = 100;
  }

  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SDSHiercarchicalServiceResult> {
    let result = searchValue
      ? this.data.filter(
          (element) =>
            element.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        )
      : this.data;
    return of({
      items: result,
      totalItems: result.length,
    });
  }
}
