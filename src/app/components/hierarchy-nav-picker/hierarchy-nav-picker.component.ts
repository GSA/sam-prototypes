import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode,
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult,
} from "@gsa-sam/components";

import { HierarchyService } from "../../services/hierarchy-service/hierarchy.service";

class NavHierarchyService {
  public includeChildren: boolean = false;

  constructor(public root, public hierarchyService: HierarchyService) {}

  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SDSHiercarchicalServiceResult> {
    let result = this.hierarchyService.getMatch(
      this.root.name,
      this.includeChildren,
      currentItems,
      searchValue
    );
    return result;
  }
}

class AutoHierarchyService {
  parentKeys: string[] = [];

  constructor(
    public hierarchyService: HierarchyService,
    public level: number
  ) {}

  setParents(parents) {
    this.parentKeys = [];
    for (let i = 0; i < parents.length; i++) {
      this.parentKeys.push(parents[i].key);
    }
  }

  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SDSHiercarchicalServiceResult> {
    let result = this.hierarchyService.getDataForLevel(
      currentItems,
      this.parentKeys,
      this.level,
      searchValue
    );
    return result;
  }
}

@Component({
  selector: "hierarchy-nav-picker",
  templateUrl: "./hierarchy-nav-picker.component.html",
  styleUrls: ["./hierarchy-nav-picker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchyNavPickerComponent implements OnInit {
  data: any[] = [];
  parentKey: string = null;
  breadcrumbs: any[] = [
    {
      id: "0000000",
      name: "Home",
      code: "",
    },
  ];

  level: string = "Department";

  selectedNodes: any[] = [
    {
      name: "NAVSUP",
    },
    {
      name: "NAVSEA",
    },
    {
      name: "BUPERS",
    },
  ];

  showSideFilters: boolean = false;

  autocompleteService: NavHierarchyService;
  autocompleteSettings = new SDSAutocompletelConfiguration();
  autocompleteModel = new SDSSelectedItemModel();

  displayedColumns: string[] = ["fpdsCode", "name"];

  sortColumns: string[] = ["fpdsCode", "name"];

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

  constructor(public service: HierarchyService) {
    this.data = service.getAllDataForLevel(1);
    this.autocompleteService = new NavHierarchyService(
      this.breadcrumbs[this.breadcrumbs.length - 1],
      service
    );

    this.autocompleteSettings.id = "hierarchy";
    this.autocompleteSettings.primaryKeyField = "key";
    this.autocompleteSettings.primaryTextField = "displayLabel";
    this.autocompleteSettings.secondaryTextField = "parentName";
    this.autocompleteSettings.labelText = "Federal Hierarchy";
    this.autocompleteSettings.selectionMode = SelectionMode.SINGLE;
    this.autocompleteSettings.autocompletePlaceHolderText =
      "Enter an code or name";

    this.departmentService = new AutoHierarchyService(service, 1);
    this.subtierService = new AutoHierarchyService(service, 2);
    this.majcomService = new AutoHierarchyService(service, 3);
    this.subcommandService = new AutoHierarchyService(service, 4);
    this.officeService = new AutoHierarchyService(service, 5);
    this.initSettings();
  }

  setLevelLabel() {
    let isDod = false;
    for (let i = 0; i < this.breadcrumbs.length; i++) {
      if (this.breadcrumbs[i].code == "9700") {
        isDod = true;
      }
    }
    switch (this.breadcrumbs.length) {
      case 1: {
        this.level = "Department";
        break;
      }
      case 2: {
        this.level = "Subtier";
        break;
      }
      case 3: {
        this.level = isDod ? "Majcom" : "Office";
        break;
      }
      case 4: {
        this.level = "Subcommand 1";
        break;
      }
      case 5: {
        this.level = "Subcommand 2";
        break;
      }
      case 6: {
        this.level = "Subcommand 3";
        break;
      }
      case 7: {
        this.level = "Office";
        break;
      }
    }
  }

  toggleSideFilters() {
    this.showSideFilters = !this.showSideFilters;
  }

  navigate(value) {
    if (
      this.breadcrumbs[this.breadcrumbs.length - 1].id !=
      value.currentTarget.name
    ) {
      let node = this.service.getHierarchyNode(value.currentTarget.name);
      if (node) {
        this.breadcrumbs.push({
          id: node.key,
          name: node.name,
          code: node.fpdsCode,
        });
      }
    }
    this.data = this.service.getChildData(value.currentTarget.name);
    this.setLevelLabel();
  }

  breadcrumbSelected(id) {
    if (id == "0000000") {
      this.breadcrumbs.length = 1;
      this.data = this.service.getAllDataForLevel(1);
      this.autocompleteService.root = this.breadcrumbs[
        this.breadcrumbs.length - 1
      ];
      this.setLevelLabel();
      return;
    }
    let node = this.service.getHierarchyNode(id);
    if (node) {
      this.breadcrumbs.length =
        this.breadcrumbs.findIndex((breadcrumb) => breadcrumb.id == node.key) +
        1;
      this.data = this.service.getChildData(id);
      this.autocompleteService.root = this.breadcrumbs[
        this.breadcrumbs.length - 1
      ];
    }
    this.setLevelLabel();
  }

  autocompleteChanges(value) {
    if (!value || value.length < 1) {
      return;
    }
    let nodePath = this.service.getHierarchyNodePath(value[0].key);
    if (nodePath) {
      this.breadcrumbs = [
        {
          id: "0000000",
          name: "Home",
          code: "",
        },
      ];
      for (let i = 0; i < nodePath.length; i++) {
        this.breadcrumbs.push({
          id: nodePath[i].key,
          name: nodePath[i].name,
          code: nodePath[i].fpdsCode,
        });
      }
      this.data = [nodePath[nodePath.length - 1]];
    }
    this.setLevelLabel();
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

  officeChanges(value) {}

  initSettings() {
    this.departmentSettings.id = "department";
    this.departmentSettings.primaryKeyField = "key";
    this.departmentSettings.primaryTextField = "displayLabel";
    this.departmentSettings.secondaryTextField = "parentName";
    this.departmentSettings.labelText = "Department / Ind. Agency";
    this.departmentSettings.selectionMode = SelectionMode.SINGLE;
    this.departmentSettings.autocompletePlaceHolderText =
      "Enter an code or name";

    this.subtierSettings.id = "subtier";
    this.subtierSettings.primaryKeyField = "key";
    this.subtierSettings.primaryTextField = "displayLabel";
    this.subtierSettings.secondaryTextField = "parentName";
    this.subtierSettings.labelText = "Subtier";
    this.subtierSettings.selectionMode = SelectionMode.SINGLE;
    this.subtierSettings.autocompletePlaceHolderText = "Enter an code or name";

    this.majcomSettings.id = "majcom";
    this.majcomSettings.primaryKeyField = "org.fpdsCode";
    this.majcomSettings.primaryTextField = "org.name";
    this.majcomSettings.secondaryTextField = "parentName";
    this.majcomSettings.labelText = "Major Command";
    this.majcomSettings.selectionMode = SelectionMode.SINGLE;
    this.majcomSettings.autocompletePlaceHolderText = "Enter an code or name";

    this.subcommandSettings.id = "subcommand";
    this.subcommandSettings.primaryKeyField = "org.fpdsCode";
    this.subcommandSettings.primaryTextField = "org.name";
    this.subcommandSettings.secondaryTextField = "parentName";
    this.subcommandSettings.labelText = "Subcommand";
    this.subcommandSettings.selectionMode = SelectionMode.SINGLE;
    this.subcommandSettings.autocompletePlaceHolderText =
      "Enter an code or name";

    this.officeSettings.id = "office";
    this.officeSettings.primaryKeyField = "key";
    this.officeSettings.primaryTextField = "displayLabel";
    this.officeSettings.secondaryTextField = "parentName";
    this.officeSettings.labelText = "Office";
    this.officeSettings.selectionMode = SelectionMode.SINGLE;
    this.officeSettings.autocompletePlaceHolderText = "Enter an code or name";
  }

  ngOnInit() {}
}
