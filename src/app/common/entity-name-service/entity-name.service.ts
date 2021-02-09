import { Injectable } from "@angular/core";
import { EntityNameServiceModule } from "./entity-name-service.module";
import { Observable, of } from "rxjs";
import {
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult,
  SDSSelectedItemModel,
  SDSAutocompletelConfiguration,
  SelectionMode,
} from "@gsa-sam/components";

let entityNames = [
  { name: "Tardegrade Inc" },
  { name: "Tardegrade Federal" },
  { name: "Tardegrade East" },
  { name: "Tardegrade West" },
  { name: "Tardegrade North" },
  { name: "Tardegrade South" },
  { name: "Tardegrade Central" },
  { name: "Tardegrade Global" },
  { name: "Lily Associates" },
  { name: "Lily International" },
  { name: "Lily Global" },
  { name: "Savannah Little" },
  { name: "Max Whittle" },
  { name: "Shiloh Vittle" },
  { name: "Happy Gilman" },
  { name: "Caravan Kilts" },
  { name: "Villa de Lucian" },
];

@Injectable({
  providedIn: EntityNameServiceModule,
})
export class EntityNameService {
  public model: SDSSelectedItemModel = new SDSSelectedItemModel();
  public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

  constructor() {
    this.settings.id = "entity-name";
    this.settings.primaryKeyField = "name";
    this.settings.primaryTextField = "name";
    this.settings.secondaryTextField = null;
    this.settings.labelText = "name";
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = "Enter ID...";
    this.settings.debounceTime = 100;
  }

  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SDSHiercarchicalServiceResult> {
    let result = searchValue
      ? entityNames.filter(
          (element) =>
            element.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        )
      : entityNames;
    return of({
      items: result,
      totalItems: result.length,
    });
  }
}
