import { Injectable, TemplateRef } from '@angular/core';
import { WorkspaceModelModule } from './workspace-model.module';

import { SamModelService } from '../../model/sam-model.service';

@Injectable({
  providedIn: WorkspaceModelModule
})
export class WorkspaceModelService {

  title: string;
  page: string;
  view: string;
  showToolbar: boolean;
  showNav: boolean;
  showFilters: boolean;
  showSearchBar: boolean;
  placeholderText: string;
  template: TemplateRef<any>;
 
  constructor(public model: SamModelService) {
    this.page = 'dashboard';
    this.view = 'closed';
    this.title = 'Workspace Home';
    this.showToolbar = false;
    this.showNav = false;
    this.showFilters = false;
    this.showSearchBar = false;
    this.placeholderText = "Enter an id or keyword";
    this.template = null;
  }
}
